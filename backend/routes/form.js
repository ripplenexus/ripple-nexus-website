const express = require('express');
const { google } = require('googleapis');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
require('dotenv').config();

// Ensure the 'uploads/' directory exists
const UPLOADS_DIR = path.join(__dirname, '../uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Set up Multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_DIR); // Save files in the 'uploads' folder
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname); // Get file extension
      cb(null, uniqueSuffix + ext); // Save the file with a unique name and original extension
    }
  }),
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
});

// Google OAuth2 client setup
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET
);

// Set the refresh token
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

// Google Sheets API setup
const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

// Route for "ApplyNow" form submission (Second Excel sheet)
router.post('/submit-application', upload.single('resume'), async (req, res) => {
  const { name, surname, email, position, reason } = req.body;

  // Get file info if a file is uploaded
  const fileName = req.file ? req.file.originalname : 'No file uploaded';
  const fileUrl = req.file ? `http://localhost:5000/api/download/${req.file.filename}?original=${encodeURIComponent(req.file.originalname)}` : '';

  try {
    // Prepare the form data to be appended to Google Sheet, including the resume filename as a hyperlink
    const rowData = [[name, surname, email, position, reason, `=HYPERLINK("${fileUrl}", "${fileName}")`]];

    // Get the existing rows to calculate where to append the new data
    const getRows = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID_1, // Second sheet ID
      range: 'ApplyNow_Details!A:F', // Adjusted range to include column for the resume file
    });

    // Calculate the next row based on existing rows
    const nextRow = getRows.data.values ? getRows.data.values.length + 1 : 2;

    // Append the form data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID_1,
      range: `ApplyNow_Details!A${nextRow}:F${nextRow}`, // Append data below headers
      valueInputOption: 'USER_ENTERED', // To ensure the formula (HYPERLINK) works
      resource: {
        values: rowData,
      },
    });

    res.status(200).send('Application submitted successfully');
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).send('Error submitting application');
  }
});

// Route for "FormDetails" submission (First Excel sheet)
router.post('/submit-form', async (req, res) => {
    const { name, surname, email, message, service } = req.body;

    try {
        // First, get the last row in the sheet to calculate where to append the data
        const getRows = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_ID, // First sheet ID
            range: 'FormDetails!A:E',
        });

        // Calculate the next row based on the number of rows currently in the sheet
        const nextRow = getRows.data.values ? getRows.data.values.length + 1 : 2;

        // Prepare the data to be appended
        const rowData = [[name, surname, email, message, service.join(', ')]];

        // Append the form data to the sheet in the next available row
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: `FormDetails!A${nextRow}:E${nextRow}`, // Append data below headers
            valueInputOption: 'RAW',
            resource: {
                values: rowData,
            },
        });

        res.status(200).send('Form submitted successfully');
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).send('Error submitting form');
    }
});

// Route to serve the file with the original name for download
router.get('/download/:filename', (req, res) => {
  const filePath = path.join(UPLOADS_DIR, req.params.filename);
  const originalName = req.query.original || req.params.filename; // Original filename passed as a query param

  res.download(filePath, originalName, (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

module.exports = router;

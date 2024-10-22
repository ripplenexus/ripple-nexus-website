const { google } = require('googleapis');
require('dotenv').config();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Replace 'your_new_authorization_code' with the fresh authorization code from the URL
const authCode = '4/0AVG7fiQlVtnVYe9iogrSufGLx50nxN_5_wKUKjHrwsKFYbD440XnLaL9RXbKsuvZDd-O1A';

oauth2Client.getToken(authCode, (err, tokens) => {
  if (err) {
    console.error('Error retrieving access token', err);
    return;
  }
  console.log('Tokens:', tokens);  // This will output both the access token and refresh token
  
  // Save the refresh token securely in your .env file
  console.log('Your refresh token is:', tokens.refresh_token);
});





/*const { google } = require('googleapis');
require('dotenv').config();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/spreadsheets'],
});

console.log('Authorize this app by visiting this url:', authUrl);

*/

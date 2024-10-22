import React, { useState } from 'react';
import axios from 'axios'; // Axios for API integration
import ContactInfo from '../components/ContactInfo';
import '../styles/css/ApplyNow/ApplyNow.css';

interface FormData {
    name: string;
    surname: string;
    email: string;
    reason: string;
    position: string;
    type: string;
}

const ApplyNow: React.FC = () => {

    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');

    const [formData, setFormData] = useState<FormData>({
        name: '',
        surname: '',
        email: '',
        reason: '',
        position: '',
        type: '',
    });

    const [showConfirmationPopup, setShowConfirmationPopup] = useState<boolean>(false);
    const [showAlertPopup, setShowAlertPopup] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFile(file);
            setFileName(file.name);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowConfirmationPopup(true); // Show confirmation popup
    };

    // Confirm submission - this is where the form data will be submitted to the backend API
    const confirmSubmission = async () => {
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('surname', formData.surname);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('position', formData.position);
        formDataToSend.append('reason', formData.reason);
        if (file) {
            formDataToSend.append('resume', file);
        }

        try {
            // Submit the form data and file to the backend API
            await axios.post('http://localhost:5000/api/submit-application', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setShowConfirmationPopup(false); // Hide confirmation popup
            setShowAlertPopup(true); // Show success alert
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    const closeAlertPopup = () => {
        setShowAlertPopup(false);
    };

    return (
        <>
            <div id='contact-us' className="contact-container">
                <h1 className="Interested-in-our-mission">
                    Interested in our mission?
                </h1>
                <div className='apply-now-cover'>
                    <h2 className='Apply-now'>
                        Apply now
                    </h2>
                    <p className='Interested-in-our-mission-p'>Ready to take the next step in your career? We’re excited to hear from talented, passionate individuals who are eager to make an impact. Fill out the application form below, and let’s explore how you can become a valuable part of our team.</p>
                </div>
                <div className="contact-content">
                    <form className="contact-form" encType="multipart/form-data" onSubmit={handleSubmit}>
                        <h2 className='sendMessage'>Send us a Message</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />

                        <label htmlFor="surname">Surname</label>
                        <input type="text" id="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} />

                        <label htmlFor="email">Business Email</label>
                        <input type="email" id="email" placeholder="Business Email" value={formData.email} onChange={handleChange} />

                        <label htmlFor="position">Position you are applying for?</label>
                        <select id="position" value={formData.position} onChange={handleChange}>
                            <option value="" disabled selected>Select a position</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="manager">Manager</option>
                            <option value="analyst">Analyst</option>
                        </select>

                        <label htmlFor="reason">Why should we hire you?</label>
                        <p className='form-smaller-texts'>Cover letter</p>
                        <textarea id="reason" placeholder="Write something here" value={formData.reason} onChange={handleChange} rows={3}></textarea>

                        <label htmlFor="resumeUpload" className="custom-file-upload" style={{color: "#457fd7"}}>
                            {fileName ? `File: ${fileName}` : 'Upload Resume'}
                        </label>
                        <input
                            type="file"
                            id="resumeUpload"
                            name="resume"
                            accept=".doc,.docx,.pdf"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <p className='form-smaller-texts' style={{marginLeft:"1.5em"}}>Doc, Docx, pdf (10MB)</p>
                        <button className='form-submit-button' type="submit">Apply</button>
                    </form>
                    <ContactInfo />
                </div>

                {showConfirmationPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <h2 style={{ color: "black" }}>Confirm Submission</h2>
                            <p style={{ color: "black" }}>Are you sure you want to submit the form?</p>
                            <div className='button-group'>
                                <button onClick={confirmSubmission}>Yes</button>
                                <button onClick={() => setShowConfirmationPopup(false)}>No</button>
                            </div>
                        </div>
                    </div>
                )}

                {showAlertPopup && (
                    <div className="alert-popup">
                        <div className="alert-popup-content">
                            <p style={{ color: "black" }}>Your request has been submitted!</p>
                            <button onClick={closeAlertPopup}>Close</button>
                        </div>
                    </div>
                )}
            </div >
        </>
    )
}

export default ApplyNow;

import React, { useState, useEffect } from 'react';
import '../styles/css/MacBookAir/Contact.css';
import ContactInfo from './ContactInfo';
import { submitForm } from '../services/api';
import { LeftObserver, TopObserver, RightObserver, BottomObserver } from '../utils/Animation';

interface FormData {
    name: string;
    surname: string;
    email: string;
    message: string;
    service: string[]; // Changed from [string] to string[]
}

const Contacts: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        surname: '',
        email: '',
        message: '',
        service: ['Web Development'],
    });

    const [showConfirmationPopup, setShowConfirmationPopup] = useState<boolean>(false);
    const [showAlertPopup, setShowAlertPopup] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    // const handleServiceChange = (service: string, e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     // const target = e.target as HTMLButtonElement;
    //     // setServices([...services,service]);
    //     setServices(service);
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         service: prevState.service.includes(service) ? prevState.service.filter((s) => s !== service) : [...prevState.service, service]
    //     }));
    // }

    const handleServiceChange = (service: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // setServices((prevServices) => [...prevServices, service]);
        setFormData((prevState) => ({
          ...prevState,
          service: prevState.service.includes(service)
            ? prevState.service.filter((s) => s !== service)
            : [...prevState.service, service]
        }));
      };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowConfirmationPopup(true);
    };

    const confirmSubmission = async () => {
        // Handle form data submission to the server
        console.log(formData);
        try {
            await submitForm(formData);  // Send data to the backend
        } catch (error) {
            console.error('Error submitting form', error);
        }
        setShowConfirmationPopup(false);
        setShowAlertPopup(true);
    };

    const closeAlertPopup = () => {
        setShowAlertPopup(false);
    };

    // animation part

    useEffect(() => {
        const headerTitle = document.querySelectorAll('.contact-header-title') as NodeListOf<HTMLElement>;
        headerTitle.forEach((element, index) => {
            TopObserver.observe(element);
        });

        const headerDescription = document.querySelectorAll('.contact-header-description') as NodeListOf<HTMLElement>;
        headerDescription.forEach((element, index) => {
            BottomObserver.observe(element);
        });

        // const contactContent = document.querySelectorAll('.contact-content') as NodeListOf<HTMLElement>;
        // contactContent.forEach((element, index) => {
        //     LeftObserver.observe(element);
        // });

    }, []);


    return (
        <>
            <div id='contact-us' className="contact-container">
                <div className="contact-header">
                    <h1 className='contact-header-title'>Get In Touch</h1>
                    <p className='contact-header-description'>We'd love to hear from you! Whether you have questions, need more information, or want to discuss your project, feel free to reach out. Our team is here to help and will get back to you as soon as possible.</p>
                </div>
                <div className="contact-content">
                    <form className="contact-form">
                        <h2 className='sendMessage'>Send us a Message</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />

                        <label htmlFor="surname">Surname</label>
                        <input type="text" id="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} />

                        <label htmlFor="email">Business Email</label>
                        <input type="email" id="email" placeholder="Business Email" value={formData.email} onChange={handleChange} />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>

                        <div className="button-group">
                            {['Web Development', 'UI/UX Design', 'Graphic & Logic Design', 'Resume/CV Writing', 'LinkedIn Optimization'].map((service) => (
                                <button
                                    type="button"
                                    key={service}
                                    id={service}
                                    value={service}
                                    className={`px-4 py-2 rounded-md ${formData.service.includes(service) ? 'bg-[#457FD7] text-white' : 'border border-black text-black'}`}
                                    onClick={(event) =>{handleServiceChange(service, event);}} >
                                    {service}
                                </button>
                            ))}
                        </div>
                        <button className='form-submit-button' onClick={handleSubmit}>Submit</button>

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
    );
};

export default Contacts;

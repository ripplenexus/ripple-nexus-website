import React, { useEffect, useState } from 'react';
import whatsappIcon from '../assets/img/whatsappIcon.png';
import '../styles/WhatsAppForm.css'

const WhatsAppForm: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=7599756826&text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    window.addEventListener('scroll', () => {
        const stickyElement = document.getElementById('sticky-element') as HTMLElement;
        const footer = document.querySelector('footer') as HTMLElement;
        // const stickyRect = stickyElement.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();

        if (footerRect.top < window.innerHeight) {
            stickyElement.style.position = 'absolute';
            stickyElement.style.bottom = `${(window.innerHeight - footerRect.top)*0.1}px`; // Adjust 16px for padding
            stickyElement.style.right = '1em'; // Ensure it stays at the right
        } else {
            stickyElement.style.position = 'fixed';
            stickyElement.style.bottom = '1em';
            stickyElement.style.right = '1em'; // Ensure it stays at the right
        }
    });

    return (
        <div className='whatsapp-container'>
            <div id="sticky-element" className="sticky-element">
                <img
                    src={whatsappIcon}
                    alt="Click to contact"
                    onClick={() => setShowForm(true)}
                    className="whatsapp-image"
                />
            </div>

            {showForm && (
                <div className="whatsapp-form-popup">
                    <form onSubmit={handleSubmit} className="whatsapp-form">
                        <button type="button" style={{ borderRadius: "50%" }} className="close-btn" onClick={() => setShowForm(false)}>X</button>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit">Send via WhatsApp</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default WhatsAppForm;

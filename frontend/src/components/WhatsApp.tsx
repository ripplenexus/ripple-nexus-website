import React, { useEffect, useState } from 'react';
import whatsappIcon from '../assets/img/whatsappIcon.png';
import '../styles/WhatsAppForm.css'

const WhatsAppForm: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '',services:'', message: '' });
    // const [startChat, setStartChat] = useState()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappMessage = `> *${formData.services}*\n\nName : *${formData.name}*\nEmail : *${formData.email}*\n\nMessage : ${formData.message}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=+917599756826&text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    // const handleChat = (e: React.MouseEvent<HTMLButtonElement | HTMLImageElement>) =>{
    //     setShowForm(!showForm);
    //     const whatsappPopUp = document.getElementById('whatsapp-form-popup') as HTMLElement;
    //     if(!showForm){
    //         whatsappPopUp?.classList.add('drop-show-effect');
    //         console.log('affectted');
    //     } else {
    //         whatsappPopUp?.classList.remove('drop-show-effect');
    //         console.log('affect removed');
    //     }

    // }

    // const handleChat = (e: React.MouseEvent<HTMLButtonElement | HTMLImageElement>) => {
    //     setShowForm(prevShowForm => {
    //         const newShowForm = !prevShowForm;
    //         const whatsappPopUp = document.getElementById('whatsapp-form-popup') as HTMLElement;
    //         if (whatsappPopUp) {
    //             if (!newShowForm) {
    //                 console.log(whatsappPopUp.classList);
    //                 whatsappPopUp.classList.add('drop-show-effect');
    //                 console.log(whatsappPopUp.classList);
    //                 console.log('affected');
    //             } else {
    //                 console.log(whatsappPopUp.classList);
    //                 whatsappPopUp.classList.remove('drop-show-effect');
    //                 console.log(whatsappPopUp.classList);
    //                 console.log('affect removed');
    //             }
    //         }
    //         return newShowForm;
    //     });
    // };

    useEffect(() => {
        const whatsappPopUp = document.getElementById('whatsapp-form-popup') as HTMLElement;
        if (whatsappPopUp) {
            if (showForm) {
                whatsappPopUp.classList.add('drop-show-effect');
                // console.log('affected');
            } else {
                whatsappPopUp.classList.remove('drop-show-effect');
                // console.log('affect removed');
            }
        }
    }, [showForm]);

    window.addEventListener('scroll', () => {
        const stickyElement = document.getElementById('sticky-element') as HTMLElement;
        const footer = document.querySelector('footer') as HTMLElement;
        // const stickyRect = stickyElement.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();

        // console.log(footerRect);
        if (footerRect.top < window.innerHeight) {
            stickyElement.style.position = 'absolute';
            stickyElement.style.bottom = `${(window.innerHeight - footerRect.top) * 0.1}px`; // Adjust 16px for padding
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
                <div className='tooltip' data-title='Start Messaging'>
                    <img

                        src={whatsappIcon}
                        alt="Click to contact"
                        onClick={() => setShowForm(!showForm)}
                        className="whatsapp-image tooltip"
                    />
                </div>

                {showForm && (
                    <div id='whatsapp-form-popup' className="whatsapp-form-popup">
                        <form onSubmit={handleSubmit} className="whatsapp-form">
                            <button type="button" style={{ borderRadius: "50%" }} className="close-btn" onClick={() => setShowForm(false)}>✖</button>
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
                                <label htmlFor='whatsapp-service'>Service:</label>
                            <select id="whatsapp-service" name='services' onChange={handleInputChange} required>
                            <option value='' disabled selected>Select a position</option>
                                {['Web Development', 'UI/UX Design', 'Graphics Design', 'Logo and Branding Design', 'Resume/CV Writing', 'LinkedIn Optimization'].map((service, index)=>{
                                   return (<option value={service}>{service}</option>)
                                })};
                            </select>
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


        </div>
    );
};

export default WhatsAppForm;

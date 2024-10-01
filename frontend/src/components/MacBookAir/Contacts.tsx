import React, {useState} from 'react';
import '../../../public/static/css/MacBookAir/Contact.css';

interface FormData {
    name: string;
    surname: string;
    email: string;
    message: string;
    type: string;
}

const Contacts: React.FC = () => {
    const [type, setType] = useState<string>('');

    const [formData, setFormData] = useState<FormData>({
        name: '',
        surname: '',
        email: '',
        message: '',
        type: '',
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

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
            const target = e.target as HTMLButtonElement;
            setType(target.value);
            setFormData(prevState =>({
                ...prevState,
                type: target.value
            }));
            console.log(target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowConfirmationPopup(true);
    };

    const confirmSubmission = () => {
        // Handle form data submission to the server
        console.log(formData);
        setShowConfirmationPopup(false);
        setShowAlertPopup(true);
    };

    const closeAlertPopup = () => {
        setShowAlertPopup(false);
    };

    return (
        <>
            <div id='contact-us' className="contact-container">
                <div className="contact-header">
                    <h1>Get In Touch</h1>
                    <p>We'd love to hear from you! Whether you have questions, need more information, or want to discuss your project, feel free to reach out. Our team is here to help and will get back to you as soon as possible.</p>
                </div>
                <div className="contact-content">
                    <form className="contact-form">
                        <h2 className='sendMessage'>Send us a Message</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Name"  value={formData.name} onChange={handleChange} />

                        <label htmlFor="surname">Surname</label>
                        <input type="text" id="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} />

                        <label htmlFor="email">Business Email</label>
                        <input type="email" id="email" placeholder="Business Email" value={formData.email} onChange={handleChange} />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>

                        <div className="button-group">
                            <button  id='WebDevelopment' type="button" value={'web'} onClick={handleButtonClick}>Web Development</button>
                            <button  id='UIDesign' type="button" value={'ui'} onClick={handleButtonClick}>UI/UX Design</button>
                            <button  id='GraphicDesign' type="button" value={'graphic'} onClick={handleButtonClick}>Graphic & Logic Design</button>
                            <button  id='ResumeWriting' type="button" value={'resume'} onClick={handleButtonClick}>Resume/CV Writing</button>
                            <button  id='LinkedIn' type="button" value={'linkedIn'} onClick={handleButtonClick}>LinkedIn Optimization</button>
                        </div>


                        <button className='form-submit-button' onClick={handleSubmit}>Submit</button>

                    </form>
                    <div  className="contact-info">
                        <h2 style={{ textAlign: "center", marginTop: "1.5rem" }}>Contact Information</h2>
                        <div className='contact-lines'>

                            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.45508 10.5206C4.45508 6.04519 7.24428 2.42554 10.6929 2.42554C14.1416 2.42554 16.9308 6.04519 16.9308 10.5206C16.9308 15.343 12.992 21.9925 11.3791 24.5251C11.0226 25.0802 10.3721 25.0802 10.0157 24.5251C8.39383 21.9925 4.45508 15.343 4.45508 10.5206ZM8.46484 10.5205C8.46484 12.1164 9.4629 13.4116 10.6926 13.4116C11.9224 13.4116 12.9204 12.1164 12.9204 10.5205C12.9204 8.92462 11.9224 7.62941 10.6926 7.62941C9.4629 7.62941 8.46484 8.92462 8.46484 10.5205Z" fill="white" />
                            </svg>
                            <p style={{ width: "80%", textAlign: "left" }}>
                                RXH7+FV5, Bibiapur Marg, Neil Lines, Cantonment, Lucknow, Uttar Pradesh 226002
                            </p>
                        </div>
                        <div className='contact-lines'>
                            <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.1367 18.6112L14.8732 18.2759C14.3297 18.1949 13.795 18.4378 13.4118 18.935L11.7721 21.0629C9.25027 19.3976 7.18287 16.7262 5.89966 13.4419L7.54823 11.3025C7.93141 10.8052 8.11855 10.1114 8.05617 9.40595L7.79775 6.49172C7.69081 5.32372 6.93336 4.44482 6.02442 4.44482H4.48278C3.47581 4.44482 2.63816 5.53188 2.70054 6.83866C3.17283 16.7147 9.25918 24.6016 16.8604 25.2145C17.8674 25.2954 18.7051 24.2084 18.7051 22.9016V20.901C18.714 19.733 18.0367 18.75 17.1367 18.6112Z" fill="white" />
                            </svg>

                            <p>  (123) 456-7890</p>
                        </div>
                        <div className='contact-lines'>
                            <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.23305 3.94238H15.1442C15.6344 3.94238 16.0354 4.46278 16.0354 5.09882V7.4117C16.0354 8.04775 15.6344 8.56814 15.1442 8.56814H6.23305C5.74293 8.56814 5.34193 8.04775 5.34193 7.4117V5.09882C5.34193 4.46278 5.74293 3.94238 6.23305 3.94238ZM4.4507 9.7245H16.9264C18.4056 9.7245 19.5997 11.2741 19.5997 13.1938V17.8196C19.5997 19.0917 18.7977 20.1325 17.8175 20.1325H16.0353V22.4453C16.0353 23.7174 15.2333 24.7582 14.253 24.7582H7.12406C6.14383 24.7582 5.34182 23.7174 5.34182 22.4453V20.1325H3.55958C2.57935 20.1325 1.77734 19.0917 1.77734 17.8196V13.1938C1.77734 11.2741 2.97144 9.7245 4.4507 9.7245ZM8.01487 22.4457H13.3616C13.8517 22.4457 14.2527 21.9253 14.2527 21.2892V16.6635H7.12375V21.2892C7.12375 21.9253 7.52475 22.4457 8.01487 22.4457ZM16.9268 14.3505C16.4367 14.3505 16.0357 13.8301 16.0357 13.194C16.0357 12.558 16.4367 12.0376 16.9268 12.0376C17.4169 12.0376 17.8179 12.558 17.8179 13.194C17.8179 13.8301 17.4169 14.3505 16.9268 14.3505Z" fill="white" />
                            </svg>

                            <p> contact@company.com</p>

                        </div>
                        <div className='contact-lines'>
                            <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.23305 3.94238H15.1442C15.6344 3.94238 16.0354 4.46278 16.0354 5.09882V7.4117C16.0354 8.04775 15.6344 8.56814 15.1442 8.56814H6.23305C5.74293 8.56814 5.34193 8.04775 5.34193 7.4117V5.09882C5.34193 4.46278 5.74293 3.94238 6.23305 3.94238ZM4.4507 9.7245H16.9264C18.4056 9.7245 19.5997 11.2741 19.5997 13.1938V17.8196C19.5997 19.0917 18.7977 20.1325 17.8175 20.1325H16.0353V22.4453C16.0353 23.7174 15.2333 24.7582 14.253 24.7582H7.12406C6.14383 24.7582 5.34182 23.7174 5.34182 22.4453V20.1325H3.55958C2.57935 20.1325 1.77734 19.0917 1.77734 17.8196V13.1938C1.77734 11.2741 2.97144 9.7245 4.4507 9.7245ZM8.01487 22.4457H13.3616C13.8517 22.4457 14.2527 21.9253 14.2527 21.2892V16.6635H7.12375V21.2892C7.12375 21.9253 7.52475 22.4457 8.01487 22.4457ZM16.9268 14.3505C16.4367 14.3505 16.0357 13.8301 16.0357 13.194C16.0357 12.558 16.4367 12.0376 16.9268 12.0376C17.4169 12.0376 17.8179 12.558 17.8179 13.194C17.8179 13.8301 17.4169 14.3505 16.9268 14.3505Z" fill="white" />
                            </svg>
                            <p>  (123) 456-7891</p>
                        </div>
                        <div className="contacts-social-media">
                            <svg width="114" height="23" viewBox="0 0 114 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4043 10.3836L18.538 2.26318H16.8482L10.6514 9.31258L5.70568 2.26318H0L7.48049 12.9241L0 21.4386H1.68986L8.22962 13.9926L13.4538 21.4386H19.1594M2.29977 3.5111H4.89588L16.8469 20.252H14.2502" fill="#D2D2D2" />
                                <g clipPath="url(#clip0_81_1841)">
                                    <path d="M41.1854 3.99137C43.7453 3.99137 44.0489 4.00096 45.0604 4.0473C47.6587 4.16554 48.8723 5.39836 48.9906 7.97746C49.0369 8.98816 49.0457 9.29177 49.0457 11.8517C49.0457 14.4124 49.0361 14.7152 48.9906 15.7259C48.8715 18.3026 47.6611 19.5378 45.0604 19.6561C44.0489 19.7024 43.7469 19.712 41.1854 19.712C38.6254 19.712 38.3218 19.7024 37.3111 19.6561C34.7065 19.537 33.4992 18.2986 33.381 15.7251C33.3346 14.7144 33.325 14.4116 33.325 11.8509C33.325 9.29097 33.3354 8.98816 33.381 7.97666C33.5 5.39836 34.7105 4.16475 37.3111 4.0465C38.3226 4.00096 38.6254 3.99137 41.1854 3.99137ZM41.1854 2.26318C38.5815 2.26318 38.2555 2.27437 37.2328 2.32071C33.7509 2.4805 31.8158 4.41243 31.656 7.89756C31.6088 8.92105 31.5977 9.24703 31.5977 11.8509C31.5977 14.4548 31.6088 14.7815 31.6552 15.8042C31.815 19.2862 33.7469 21.2213 37.232 21.3811C38.2555 21.4274 38.5815 21.4386 41.1854 21.4386C43.7892 21.4386 44.116 21.4274 45.1387 21.3811C48.6174 21.2213 50.5573 19.2894 50.7147 15.8042C50.7619 14.7815 50.7731 14.4548 50.7731 11.8509C50.7731 9.24703 50.7619 8.92105 50.7155 7.89836C50.5589 4.41962 48.6246 2.4813 45.1395 2.32151C44.116 2.27437 43.7892 2.26318 41.1854 2.26318ZM41.1854 6.9276C38.4664 6.9276 36.2621 9.13198 36.2621 11.8509C36.2621 14.5698 38.4664 16.775 41.1854 16.775C43.9043 16.775 46.1087 14.5706 46.1087 11.8509C46.1087 9.13198 43.9043 6.9276 41.1854 6.9276ZM41.1854 15.0468C39.4204 15.0468 37.9895 13.6166 37.9895 11.8509C37.9895 10.086 39.4204 8.65499 41.1854 8.65499C42.9503 8.65499 44.3813 10.086 44.3813 11.8509C44.3813 13.6166 42.9503 15.0468 41.1854 15.0468ZM46.3036 5.58293C45.6676 5.58293 45.1523 6.09827 45.1523 6.73345C45.1523 7.36864 45.6676 7.88398 46.3036 7.88398C46.9388 7.88398 47.4533 7.36864 47.4533 6.73345C47.4533 6.09827 46.9388 5.58293 46.3036 5.58293Z" fill="#D2D2D2" />
                                </g>
                                <g clipPath="url(#clip1_81_1841)">
                                    <path d="M78.8828 4.80702C76.0033 4.61048 69.59 4.61127 66.7144 4.80702C63.6008 5.01955 63.2341 6.90034 63.2109 11.8508C63.2341 16.7925 63.5976 18.6812 66.7144 18.8946C69.5908 19.0903 76.0033 19.0911 78.8828 18.8946C81.9965 18.682 82.3632 16.8012 82.3864 11.8508C82.3632 6.90913 81.9996 5.02035 78.8828 4.80702ZM70.4017 15.0467V8.65489L76.7935 11.8452L70.4017 15.0467Z" fill="#D2D2D2" />
                                </g>
                                <g clipPath="url(#clip2_81_1841)">
                                    <path d="M110.005 2.26318H98.8191C96.6131 2.26318 94.8242 4.05209 94.8242 6.25806V17.4437C94.8242 19.6497 96.6131 21.4386 98.8191 21.4386H110.005C112.212 21.4386 114 19.6497 114 17.4437V6.25806C114 4.05209 112.212 2.26318 110.005 2.26318ZM101.216 17.4437H98.8191V8.65499H101.216V17.4437ZM100.018 7.64189C99.2457 7.64189 98.6194 7.0107 98.6194 6.23249C98.6194 5.45429 99.2457 4.8231 100.018 4.8231C100.789 4.8231 101.416 5.45429 101.416 6.23249C101.416 7.0107 100.79 7.64189 100.018 7.64189ZM110.804 17.4437H108.407V12.9663C108.407 10.2753 105.211 10.479 105.211 12.9663V17.4437H102.814V8.65499H105.211V10.0652C106.326 7.99903 110.804 7.84643 110.804 12.0434V17.4437Z" fill="#D2D2D2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_81_1841">
                                        <rect width="19.1754" height="19.1754" fill="white" transform="translate(31.5977 2.26318)" />
                                    </clipPath>
                                    <clipPath id="clip1_81_1841">
                                        <rect width="19.1754" height="19.1754" fill="white" transform="translate(63.2109 2.26318)" />
                                    </clipPath>
                                    <clipPath id="clip2_81_1841">
                                        <rect width="19.1754" height="19.1754" fill="white" transform="translate(94.8242 2.26318)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                {showConfirmationPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <h2 style={{color:"black"}}>Confirm Submission</h2>
                            <p style={{color:"black"}}>Are you sure you want to submit the form?</p>
                            <div className='button-group'>
                            <button  onClick={confirmSubmission}>Yes</button>
                            <button  onClick={() => setShowConfirmationPopup(false)}>No</button>
                            </div>
                        </div>
                    </div>
                )}

                {showAlertPopup && (
                    <div className="alert-popup">
                        <div className="alert-popup-content">
                            <p style={{color:"black"}}>Your request has been submitted!</p>
                            <button  onClick={closeAlertPopup}>Close</button>
                        </div>
                    </div>
                )}
            </div >

        </>
    );
};

export default Contacts;

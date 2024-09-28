import React, { useState } from 'react';
import backgroundImage from '../../src/assets/Rectangle 107.svg'; // Correct the path to your SVG image
import { faInstagram, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contacts: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState('Web Development');
  
  return (
    <div>
      {/* Contact header section */}
      <div className="flex-col pt-20 w-full min-h-[500px] text-left pl-20 lg:pl-32 bg-cover bg-no-repeat bg-center relative items-center justify-center py-5 px-5 text-white">
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:w-full w-full mt-4">
            We'd love to hear from you! Whether you have questions, need more information, or want to discuss your project, feel free to reach out. Our team is here to help and will get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact form and info section */}
      <div className="relative top-[-150px] flex flex-col lg:flex-row justify-center lg:justify-between items-start w-full max-w-[1200px] mx-auto">
        {/* Form Section */}
        <form className="flex flex-col w-full lg:w-3/5 bg-white shadow-md p-8 rounded-md mb-8 lg:mb-0">
          <h2 className="text-[#5586CF] mb-4 font-bold text-[21px]">Send us a Message</h2>

          <label htmlFor="name" className="mb-1 text-black">Name</label>
          <input type="text" id="name" placeholder="Name" className="mb-3 px-2 py-2 border border-[#D9D9D9] rounded-md" />

          <label htmlFor="surname" className="mb-1 text-black">Surname</label>
          <input type="text" id="surname" placeholder="Surname" className="mb-3 px-2 py-2 border border-[#D9D9D9] rounded-md" />

          <label htmlFor="email" className="mb-1 text-black">Business Email</label>
          <input type="email" id="email" placeholder="Business Email" className="mb-3 px-2 py-2 border border-[#D9D9D9] rounded-md" />

          <label htmlFor="message" className="mb-1 text-black">Message</label>
          <textarea id="message" placeholder="Message" className="mb-3 px-2 py-2 border border-[#D9D9D9] rounded-md"></textarea>

          {/* Service Selection */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${selectedButton === 'Web Development' ? 'bg-[#457FD7] text-white' : 'border border-black text-black'}`}
              onClick={() => setSelectedButton('Web Development')}
            >
              Web Development
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${selectedButton === 'UI/UX Design' ? 'bg-[#457FD7] text-white' : 'border border-black text-black'}`}
              onClick={() => setSelectedButton('UI/UX Design')}
            >
              UI/UX Design
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${selectedButton === 'Graphic & Logic Design' ? 'bg-[#457FD7] text-white' : 'border border-black text-black'}`}
              onClick={() => setSelectedButton('Graphic & Logic Design')}
            >
              Graphic & Logic Design
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${selectedButton === 'Resume/CV Writing' ? 'bg-[#457FD7] text-white' : 'border border-black text-black'}`}
              onClick={() => setSelectedButton('Resume/CV Writing')}
            >
              Resume/CV Writing
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${selectedButton === 'LinkedIn Optimization' ? 'bg-[#457FD7] text-white' : 'border border-black text-black'}`}
              onClick={() => setSelectedButton('LinkedIn Optimization')}
            >
              LinkedIn Optimization
            </button>
          </div>
          <button className="w-[6.5em] h-[3.5em] mt-2 bg-[#457FD7] text-white rounded-md">Apply</button>
        </form>

        {/* Contact Information Section */}
        <div className="flex flex-col w-full lg:w-2/5 p-[46px] lg:p-[52px] bg-[#103F6D] shadow-lg border-[1.3px] border-[#00000029] rounded-md h-[640px]">
          <h2 className="text-center text-white font-semibold text-[21.1px] mb-[17.3px]">
            Contact Information
          </h2>
          <div className="flex flex-col gap-6 mt-6"> {/* Increased gap for more spacing */}
  {/* Address */}
  <div className="flex gap-4 items-center">
    <svg className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 28">
      <path d="M4.45508 10.5206C4.45508 6.04519 7.24428 2.42554 10.6929 2.42554C14.1416 2.42554 16.9308 6.04519 16.9308 10.5206C16.9308 15.343 12.992 21.9925 11.3791 24.5251C11.0226 25.0802 10.3721 25.0802 10.0157 24.5251C8.39383 21.9925 4.45508 15.343 4.45508 10.5206ZM8.46484 10.5205C8.46484 12.1164 9.4629 13.4116 10.6926 13.4116C11.9224 13.4116 12.9204 12.1164 12.9204 10.5205C12.9204 8.92462 11.9224 7.62941 10.6926 7.62941C9.4629 7.62941 8.46484 8.92462 8.46484 10.5205Z" fill="white" />
    </svg>
    <p className="text-white">RXH7+FV5, Bibiapur Marg, Neil Lines, Cantonment, Lucknow, Uttar Pradesh 226002</p>
  </div>

  {/* Phone Number */}
  <div className="flex gap-4 items-center">
    <svg className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 29">
      <path d="M17.1367 18.6112L14.8732 18.2759C14.3297 18.1949 13.795 18.4378 13.4118 18.935L11.7721 21.0629C9.25027 19.3976 7.18287 16.7262 5.89966 13.4419L7.54823 11.3025C7.93141 10.8052 8.11855 10.1114 8.05617 9.40595L7.79775 6.49172C7.69081 5.32372 6.93336 4.44482 6.02442 4.44482H4.48278C3.47581 4.44482 2.63816 5.53188 2.70054 6.83866C3.17283 16.7147 9.25918 24.6016 16.8604 25.2145C17.8674 25.2954 18.7051 24.2084 18.7051 22.9016V20.901C18.714 19.733 18.0367 18.75 17.1367 18.6112Z" fill="white" />
    </svg>
    <p className="text-white">(123) 456-7890</p>
  </div>

  {/* Email */}
  <div className="flex gap-4 items-center">
    <svg className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 29">
      <path d="M6.23305 3.94238H15.1442C15.6344 3.94238 16.0354 4.46278 16.0354 5.09882V7.4117C16.0354 8.04775 15.6344 8.56814 15.1442 8.56814H6.23305C5.74293 8.56814 5.34193 8.04775 5.34193 7.4117V5.09882C5.34193 4.46278 5.74293 3.94238 6.23305 3.94238ZM4.4507 9.7245H16.9264C18.4056 9.7245 19.5997 11.2741 19.5997 13.1938V17.8196C19.5997 19.0917 18.7977 20.1325 17.8175 20.1325H16.0353V22.4453C16.0353 23.7174 15.2333 24.7582 14.253 24.7582H7.12406C6.14383 24.7582 5.34182 23.7174 5.34182 22.4453V20.1325H3.55958C2.57935 20.1325 1.77734 19.0917 1.77734 17.8196V13.1938C1.77734 11.2741 2.97144 9.7245 4.4507 9.7245ZM8.01487 22.4457H13.3616C13.8517 22.4457 14.2527 21.9253 14.2527 21.2892V16.6635H7.12375V21.2892C7.12375 21.9253 7.52475 22.4457 8.01487 22.4457ZM16.9268 14.3505C16.4367 14.3505 16.0357 13.8301 16.0357 13.194C16.0357 12.558 16.4367 12.0376 16.9268 12.0376C17.4169 12.0376 17.8179 12.558 17.8179 13.194C17.8179 13.8301 17.4169 14.3505 16.9268 14.3505Z" fill="white" />
    </svg>
    <p className="text-white">contact@company.com</p>
  </div>
</div>


          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6 ml-6 pt-20">
  <a href="#" aria-label="Twitter">
    <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white" />
  </a>
  <a href="#" aria-label="Instagram">
    <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white" />
  </a>
  <a href="#" aria-label="YouTube">
    <FontAwesomeIcon icon={faYoutube} size="2x" className="text-white" />
  </a>
  <a href="#" aria-label="LinkedIn">
    <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white" />
  </a>
</div>

        </div>
      </div>
    </div>
  );
};

export default Contacts;

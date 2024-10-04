import React from 'react';
import backgroundImage from '../../src/assets/image 13.svg'; // Correct the path to your image

const CompanyVision: React.FC = () => {
  return (
    <section className="relative w-full bg-cover bg-center" style={{ height: '647px' }}>
      <img
        src={backgroundImage}
        alt="Company Vision Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100" // Ensures background image covers the entire section
      />
      <div className="flex flex-col items-center justify-center relative py-5 px-5 text-black">
        <div className="w-full min-h-[500px] text-center lg:text-left pt-16 pl-10 lg:pl-24 bg-opacity-80">
        <h2 className="w-[394px] h-[70px] ml-0 mr-[640px] mb-[18px] text-[46.8px] font-semibold font-poppins text-left text-black">
  Company Vision
</h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:w-3/4 w-full mt-4">
            I chose the name <span className="font-semibold">‘Ripple Nexus’</span> to reflect our core philosophy and strategic vision.
            The 'Ripple' symbolizes our belief in the power of small, thoughtful actions to create waves of significant change. 
            It represents our approach to innovation—starting with a focused initiative that expands its influence far and wide.
            <br /><br />
            ‘Nexus,’ on the other hand, signifies being a central point of connection, where diverse ideas, talents, and technologies 
            come together to create something much greater than the sum of its parts.
            <br /><br />
            Together, 'Ripple Nexus' embodies the idea of being a dynamic hub that initiates positive, far-reaching impact. 
            It's about creating a network of transformative connections that can inspire, influence, and drive meaningful change across various domains. 
            This name reflects our aspiration to not just be a participant in our field, but to be the catalyst that brings together 
            the right elements to shape the future.
          </p>
          <p className="mt-8 font-bold text-lg">- Ashutosh Shukla</p>
          <p className="text-lg">CEO, Ripple Nexus</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyVision;

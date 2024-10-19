import React,{useEffect} from 'react';
import { RightObserver } from '../utils/Animation';
import backgroundImage from '../assets/image 13.svg'; // Correct the path to your image

const CompanyVision: React.FC = () => {

  useEffect(()=>{
    const divPara = document.querySelectorAll('#CompanyVision div, #CompanyVision p') as NodeListOf<HTMLElement>;
    divPara.forEach((element, index) => {
        RightObserver.observe(element);
    });
    
    // const imges = document.querySelectorAll('#CompanyVision img') as NodeListOf<HTMLElement>;
    // imges.forEach((element, index) => {
    //     TopObserver.observe(element);
    // });
},[]);

  return (
    <section className="relative w-full bg-cover bg-center" id='CompanyVision'>
      <img
        src={backgroundImage}
        alt="Company Vision Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100" // Ensures background image covers the entire section
      />
      <div className="flex flex-col items-center justify-center relative py-1 px-1 sm:py-5 sm:px-5 text-black ">
        <div className="w-full min-h-[500px] text-center lg:text-left pt-16 pl-2 sm:pl-10 lg:pl-24 bg-opacity-80">
        <h2 className="w-[80%]  ml-0  mb-[18px] text-[2.8em] font-bold font-poppins text-left text-black">
  Company Vision
</h2>

          <p className="text-lg leading-tight font-500  sm:text-xl md:text-2xl lg:w-3/4 w-full mt-4 text-center sm:text-left">
            I chose the name <span className="font-700">‘Ripple Nexus’</span> to reflect our core philosophy and strategic vision.
            The 'Ripple' symbolizes our belief in the power of small, thoughtful actions to create waves of significant change. 
            It represents our approach to innovation-starting with a focused initiative that expands its influence far and wide.
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

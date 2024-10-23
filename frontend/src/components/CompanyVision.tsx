import React, { useEffect } from 'react';
import backgroundImage from '../assets/image 13.svg'; // Correct the path to your image
import '../styles/coverAnimation.css'

const CompanyVision: React.FC = () => {

  //   useEffect(()=>{
  //     const divPara = document.querySelectorAll('#CompanyVision p') as NodeListOf<HTMLElement>;
  //     divPara.forEach((element, index) => {
  //         BottomObserver.observe(element);
  //     });

  //     // const imges = document.querySelectorAll('#CompanyVision img') as NodeListOf<HTMLElement>;
  //     // imges.forEach((element, index) => {
  //     //     TopObserver.observe(element);
  //     // });
  // },[]);

  return (
    <section className="pt-2 w-full" id='CompanyVision'>
      {/* <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div> */}
      <div id="title">
        <h2 className="w-[80%] mx-auto my-[0.2em] text-[2.4rem] sm:text-8xl font-[600] font-[Poppins]">
          Company Vision
        </h2>
        <div className="w-full min-h-[500px] text-center  p-4 sm:pl-10 lg:pl-24 bg-opacity-80 tracking-normal">
          <p className="text-lg text-left leading-tight font-400 mx-auto sm:text-xl md:text-2xl lg:w-3/4 w-full mt-0 font-[Poppins]" >
            I chose the name <span className="font-[600]">‘Ripple Nexus’</span> to reflect our core philosophy and strategic vision.
            The 'Ripple' symbolizes our belief in the power of small, thoughtful actions to create waves of significant change.
            It represents our approach to innovation-starting with a focused initiative that expands its influence far and wide.
            <br /><br />
            ‘Nexus,’ on the other hand, signifies being a central point of connection, where diverse ideas, talents, and technologies
            come together to create something much greater than the sum of its parts.
            <br /><br />
            Together, 'Ripple Nexus' embodies the idea of being a dynamic hub that initiates positive, far-reaching impact.
            It's about creating a network of transformative connections that can inspire, influence, and drive meaningful change across various domains.
            This name reflects our aspiration to not just be a participant in our field, but to be the catalyst that brings together
            the right elements to shape the future.<br/>
            {/* <span>- Ashutosh Shukla</span><br/>
            <span>Founder and Lead Consultant,<br />Ripple Nexus</span> */}
          </p>

          <p className="mt-8 lg:ml-44 font-bold text-lg text-left">- Ashutosh Shukla</p>
          <p className="lg:ml-44 mb-4 text-lg text-left">Founder and Lead Consultant, Ripple Nexus</p>
          {/* <hr style={{boxShadow:"0 8px 1em 0.2em white", borderBottom:"0.5px solid #888",position:"relative", zIndex:"1000", filter:"blur(10px)"}}/> */}
        </div>
      </div>
      {/* <img
        src={backgroundImage}
        alt="Company Vision Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100" // Ensures background image covers the entire section
      />
      <div className="flex flex-col items-center justify-center relative py-1 px-1 sm:py-5 sm:px-5 font-[Poppins] text-black ">
        <div className="w-full min-h-[500px] text-center lg:text-left pt-16 pl-2 sm:pl-10 lg:pl-24 bg-opacity-80">
          <h2 className="w-[80%]  ml-0  mb-[18px] text-[2.6em] font-[600] font-[Poppins] text-left text-black">
            Company Vision
          </h2>

          <p className="text-lg leading-tight font-400  sm:text-xl md:text-2xl lg:w-3/4 w-full mt-4 font-[Poppins] text-center sm:text-left">
            I chose the name <span className="font-[600]">‘Ripple Nexus’</span> to reflect our core philosophy and strategic vision.
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
          <p className="text-lg">Founder and Lead Consultant,<br />Ripple Nexus</p>
        </div>
      </div> */}
    </section>
  );
};

export default CompanyVision;

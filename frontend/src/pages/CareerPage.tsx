import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopObserver, BottomObserver, RightObserver, LeftObserver } from '../utils/Animation';

import Diversity from '../assets/img/career/diversity.png';
import People from '../assets/img/career/people.png';
import coverBackground from '../assets/img/career/cover.svg';
import Growing from '../assets/img/career/growing.svg';
import Accessible from '../assets/img/career/accessible.svg';
import Underline1 from '../assets/img/career/underlineVector6.png';
import Underline2 from '../assets/img/career/underlineVector7.png';


const Mission = [
  {
    logo: People,
    mission: "We put people first",
    description: "Empowering individuals, we prioritize needs, values, and experiences to foster meaningful connections and success."
  },
  {
    logo: Growing,
    mission: "We're always growing",
    description: "Constantly evolving, we embrace change and growth to continually improve and achieve greater success."
  },
  {
    logo: Accessible,
    mission: "We're accessible",
    description: "We're easy to reach and always available, ensuring support and communication at all times."
  },
]

const OpenPositions = [
  {
    position: "Full Stack Developer",
    duration: "Full time",
    location: "WFH",
    stipend: "$20-$30",
  },
  {
    position: "Full Stack Developer",
    duration: "Full time",
    location: "WFH",
    stipend: "$20-$30",
  },
  {
    position: "Full Stack Developer",
    duration: "Full time",
    location: "WFH",
    stipend: "$20-$30",
  },
  {
    position: "Full Stack Developer",
    duration: "Full time",
    location: "WFH",
    stipend: "$20-$30",
  }
]


const ReasonsToWork = [
  "Innovative Projects: Work on exciting and cutting-edge projects that challenge and inspire.",
  "Collaborative Culture: Be part of a supportive and collaborative team that values your contributions.",
  "Career Growth: Opportunities for professional development and career advancement.",
  "Competitive Benefits: Enjoy a comprehensive benefits package and a flexible work environment."
]

const CareerPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/apply');
  }

  useEffect(() => {
    const headerTitle = document.querySelectorAll('#career-header') as NodeListOf<HTMLElement>;
    headerTitle.forEach((element, index) => {
      TopObserver.observe(element);
    });

    const headerDescription = document.querySelectorAll('#career-header-description, .mission-card, #interested-in-mission ') as NodeListOf<HTMLElement>;
    headerDescription.forEach((element, index) => {
      BottomObserver.observe(element);
    });

  }, []);

  return (
    <div  className="min-h-screen flex flex-col items-center mb-20 ">
      {/* Header Section */}
      <div className="flex w-full justify-center p-0 bg-career-blue bg-700 h-[400px] sm:h-[500px]">
        <div className="w-full flex justify-center">
          <div
            className={`w-full h-full z-10 flex flex-col items-center justify-center  `}
            style={{
              backgroundImage: `url(${coverBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h1 id='career-header' className="text-white font-500 font-poppins text-center leading-[1.4] text-3xl sm:text-4xl lg:text-6xl w-11/12 md:w-2/3 lg:w-[650px] drop-shadow-lg " style={{lineHeight:"1.4"}}>
              Explore Exciting Career <span className='relative inline-block'>Opportunities<img className='absolute bottom-[-0.28em] left-0' src={Underline2} alt='underline-2 over Opportunity' />
              <img className='absolute' src={Underline1} alt='underline-1 over Opportunity' /></span> with Us 

            </h1>
            <p id='career-header-description' className="text-base sm:text-lg lg:text-xl w-11/12 md:w-2/3 lg:w-[650px] p-2 pt-4 sm:pt-6 lg:pt-10 font-poppins text-[1.25em] font-300 leading-[1.4] text-center text-white">
              Join our team and be part of a dynamic and innovative environment where your skills and ideas can make a real impact. We are always on the lookout for passionate and talented individuals to help us drive success and growth.
            </p>
          </div>
        </div>
      </div>

      {/* Image and Right-Side Content Section */}
      <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row justify-center items-top mt-12 py-10 gap-8 lg:gap-12">
        {/* Left Side - Image */}
        <div id='diversity-img' className="w-full lg:w-1/2 flex justify-center">
          <img src={Diversity} alt="Diversity" className="h-[13em] sm:h-[15em] lg:h-[18.5em]  shadow-lg hover:scale-105 transition-transform duration-300" style={{ width: "auto" }} />
        </div>

        {/* Right Side - Text Content */}
        <div id='diversity-description' className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 py-0 sm:px-6 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-500 font-poppins text-black text-left mb-4" style={{ lineHeight: '1.4' }}>
            Diversity, Equity, & Inclusion
          </h1>
          <p className="text-base sm:text-[1.25em]  font-[Poppins] font-400 text-black text-left" style={{ lineHeight: "1.4", padding: "0" }}>
            we are committed to fostering a diverse, equitable, and inclusive workplace where everyone feels valued and respected. Our goal is to create an environment where all team members can thrive and contribute their unique perspectives.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div id="interested-in-mission" className="flex flex-col justify-center items-center w-full text-center py-10">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-500 font-[Poppins] text-black mb-2">
          Interested in our <br />mission?
        </div>
      </div>

      {/* Interactive Cards Section */}
      <div className="flex flex-col sm:flex-row w-11/12 lg:w-10/12 gap-6 lg:gap-10 justify-evenly py-10">
        {
          Mission.map((element, index) => {
            return (
              <div key={111 + index} className="w-full sm:w-1/3 flex flex-col gap-3 p-6 bg-white rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 font-[Poppins] mission-card">
                <img src={element.logo} className="text-center w-16 h-16 sm:w-20 sm:h-20 mx-auto hover:scale-110 transition-transform duration-300" alt="People First" />
                <h2 className="text-black text-xl lg:text-[1.5em] font-500">{element.mission}</h2>
                <p className="text-base sm:text-xl lg:text-[1.2em] text-black">{element.description}</p>
              </div>
            )
          })
        }
      </div>

      {/* Open Positions Section */}
      <div className="w-11/12 lg:w-10/12 flex flex-col mt-10">
        <div className="text-black font-500 font-[Poppins] text-3xl sm:text-4xl lg:text-5xl mb-6 open-position-header">
          Open positions
        </div>

        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
            OpenPositions.map((element, index) => {
              return (
                <div key={1111 + index} className="flex flex-col justify-between w-full p-6 h-36 shadow-lg border border-gray-200 rounded-lg font-[Poppins] transition-transform hover:scale-105 duration-300 open-position-card">
                  <div className="flex flex-row justify-between items-center">
                    <h1 className="text-black text-xl sm:text-2xl lg:text-[1.6em] font-500">{element.position}</h1>
                    <button className="flex-shrink-0 flex-grow-0 text-white text-[0.75em] bg-button-light-blue rounded-[0.25em] px-6 py-3 hover:bg-blue-700 transition-colors" onClick={handleClick}>Apply Now</button>
                  </div>
                  <p className="text-black mt-0 mb text-4">{element.duration} - {element.location}</p>
                  {/* <p className="text-black mt-3 text-[1em] font-500">Stipend: <strong>{element.stipend}</strong></p> */}
                </div>
              );
            })
          }
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="w-11/12 lg:w-10/12 flex flex-col py-10 font-[Poppins]">
        <h2 className="text-black  text-3xl lg:text-[1.75em] font-600 lg:ml-4 mb-6">Why Work With Us?</h2>


        <ul className="text-black list-disc list-inside pl-5 space-y-4">
          {
            ReasonsToWork.map((ele, idx) => {
              return (
                <li className="sm:text-[1.2em] text-[1em] font-medium hover:text-blue-600 transition-colors reasons-to-work">{ele}</li>
              )
            })
          }
        </ul>
      </div>

      {/* Contact Section */}
      <div className="w-11/12 lg:w-10/12 flex flex-col py-10 font-[Poppins] how-to-apply">
        <h2 className="text-black  font-[600] text-2xl sm:text-xl lg:text-[1.75em] lg:ml-4 mb-6">
          How to Apply?
        </h2>
        <p className="text-black text-base sm:text-lg lg:ml-4 font-500">
          If you’re interested in any of the positions above or want to explore other opportunities with us, please send your resume and cover letter to <strong>contact@ripplenexus.tech</strong> with the subject line "Career Application – [Position Title]". We look forward to hearing from you!        </p>
      </div>
    </div>
  );
};

export default CareerPage;

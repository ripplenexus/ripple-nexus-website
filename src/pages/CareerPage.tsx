import React from 'react';
import { useNavigate } from 'react-router-dom';
import Diversity from '../assets/img/career/diversity.png';
import People from '../assets/img/career/people.png';
import coverBackground from '../assets/img/career/cover.svg';
import Growing from '../assets/img/career/growing.svg';
import Accessible from '../assets/img/career/accessible.svg';


const CareerPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/apply');
  }

  return (
    <div className="min-h-screen flex flex-col items-center mb-20 ">
      {/* Header Section */}
      <div className="flex w-full justify-center bg-blue-700 h-[400px] sm:h-[500px]">
        <div className="w-full flex justify-center">
          <div
            className={`w-full h-full z-10 flex flex-col items-center justify-center`}
            style={{
              backgroundImage: `url(${coverBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
            }}
          >
            <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold text-center w-11/12 md:w-2/3 lg:w-1/2 leading-tight drop-shadow-lg">
              Explore Exciting Career Opportunities with Us
            </h1>
            <p className="text-white text-base sm:text-lg lg:text-xl text-center w-11/12 md:w-2/3 lg:w-1/2 pt-4 sm:pt-6 lg:pt-10">
              Join our team and be part of a dynamic and innovative environment where your skills and ideas can make a real impact.
            </p>
          </div>
        </div>
      </div>

      {/* Image and Right-Side Content Section */}
      <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row justify-center py-10 gap-8 lg:gap-12">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={Diversity} alt="Diversity" className="w-3/4 h-64 sm:h-80 lg:w-[500px] lg:h-80 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black leading-tight">
            Diversity, Equity, & Inclusion
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-black">
            We are committed to fostering a diverse, equitable, and inclusive workplace where everyone feels valued and respected. Our goal is to create an environment where all team members can thrive and contribute their unique perspectives.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col justify-center items-center w-full text-center py-10">
        <div className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black mb-2">
          Interested in our <br/>mission?
        </div>
        {/* <div className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-700"> */}
          
        {/* </div> */}
      </div>

      {/* Interactive Cards Section */}
      <div className="flex flex-col sm:flex-row w-11/12 lg:w-10/12 gap-6 lg:gap-10 justify-evenly py-10">
        {/* Card 1 */}
        <div className="w-full sm:w-1/3 flex flex-col gap-3 p-6 bg-white rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300">
          <img src={People} className="text-center w-16 h-16 sm:w-20 sm:h-20 mx-auto hover:scale-110 transition-transform duration-300" alt="People First" />
          <h2 className="text-black font-bold text-2xl ">We put people first</h2>
          <p className="text-base sm:text-xl text-black">
            Empowering individuals, we prioritize needs, values, and experiences to foster meaningful connections and success.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-1/3 flex flex-col gap-3 p-6 bg-white rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300">
          <img src={Growing} className="text-center w-16 h-16 sm:w-20 sm:h-20 mx-auto hover:scale-110 transition-transform duration-300" alt="Growth" />
          <h2 className="text-black font-bold text-2xl ">We’re always growing</h2>
          <p className="text-base sm:text-xl text-black ">
            Constantly evolving, we embrace change and growth to continually improve and achieve greater success.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-1/3 flex flex-col gap-3 p-6 bg-white rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300">
          <img src={Accessible} className="text-center w-16 h-16 sm:w-20 sm:h-20 mx-auto hover:scale-110 transition-transform duration-300" alt="Accessibility" />
          <h2 className="text-black font-bold text-2xl ">We’re accessible</h2>
          <p className="text-base sm:text-xl text-black  ">
            We’re easy to reach and always available, ensuring support and communication at all times.
          </p>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="w-11/12 lg:w-10/12 flex flex-col mt-10">
        <div className="text-black font-bold text-4xl sm:text-5xl lg:text-7xl mb-6">
          Open positions
        </div>

        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="w-full p-6 h-36 shadow-lg border border-gray-200 rounded-lg transition-transform hover:scale-105 duration-300">
            <div className="flex justify-between items-center">
              <h1 className="text-black text-xl sm:text-2xl">Full Stack Developer</h1>
              <button className="text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700 transition-colors" onClick={handleClick}>Apply Now</button>
            </div>
            <p className="text-black mt-2">Full time - WFH</p>
            <p className="text-black mt-2">Stipend: <strong>$20 - $30</strong></p>
          </div>

          {/* Card 2 */}
          <div className="w-full p-6 h-36 shadow-lg border border-gray-200 rounded-lg transition-transform hover:scale-105 duration-300">
            <div className="flex justify-between items-center">
              <h1 className="text-black text-xl sm:text-2xl">Frontend Developer</h1>
              <button className="text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700 transition-colors" onClick={handleClick}>Apply Now</button>
            </div>
            <p className="text-black mt-2">Full time - Onsite</p>
            <p className="text-black mt-2">Stipend: <strong>$15 - $25</strong></p>
          </div>

          {/* Card 3 */}
          <div className="w-full p-6 h-36 shadow-lg border border-gray-200 rounded-lg transition-transform hover:scale-105 duration-300">
            <div className="flex justify-between items-center">
              <h1 className="text-black text-xl sm:text-2xl">Backend Developer</h1>
              <button className="text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700 transition-colors" onClick={handleClick}>Apply Now</button>
            </div>
            <p className="text-black mt-2">Part time - WFH</p>
            <p className="text-black mt-2">Stipend: <strong>$25 - $35</strong></p>
          </div>

          {/* Card 4 */}
          <div className="w-full p-6 h-36 shadow-lg border border-gray-200 rounded-lg transition-transform hover:scale-105 duration-300">
            <div className="flex justify-between items-center">
              <h1 className="text-black text-xl sm:text-2xl">UI/UX Designer</h1>
              <button className="text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700 transition-colors" onClick={handleClick}>Apply Now</button>
            </div>
            <p className="text-black mt-2">Contract - WFH</p>
            <p className="text-black mt-2">Stipend: <strong>$18 - $28</strong></p>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="w-11/12 lg:w-10/12 flex flex-col py-10">
        <h2 className="text-black font-bold text-3xl lg:text-4xl mb-6">Why Work With Us?</h2>

        <ul className="text-black list-disc list-inside pl-5 space-y-4">
          <li className="text-lg sm:text-xl font-medium hover:text-blue-600 transition-colors">
            <strong className="text-blue-700">Innovative Projects:</strong> Work on exciting and cutting-edge projects that challenge and inspire.
          </li>
          <li className="text-lg sm:text-xl font-medium hover:text-blue-600 transition-colors">
            <strong className="text-blue-700">Collaborative Culture:</strong> Be part of a supportive and collaborative team that values your contributions.
          </li>
          <li className="text-lg sm:text-xl font-medium hover:text-blue-600 transition-colors">
            <strong className="text-blue-700">Career Growth:</strong> Opportunities for professional development and career advancement.
          </li>
          <li className="text-lg sm:text-xl font-medium hover:text-blue-600 transition-colors">
            <strong className="text-blue-700">Competitive Benefits:</strong> Enjoy a comprehensive benefits package and a flexible work environment.
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="w-11/12 lg:w-10/12 flex flex-col py-10">
        <h2 className="text-black font-bold text-2xl sm:text-xl lg:text-3xl mb-6">
          Ready to Apply?
        </h2>
        <p className="text-black text-base sm:text-lg">
          If you’re interested in any of the positions above or want to explore other opportunities, please send your resume and cover letter to <strong>your-email@example.com</strong> with the subject line "Career Application – [Position Title]".
        </p>
      </div>
    </div>
  );
};

export default CareerPage;

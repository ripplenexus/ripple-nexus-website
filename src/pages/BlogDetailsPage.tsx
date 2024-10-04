import React from 'react';
import blogImage from '../assets/image 2.svg'; // Main blog image
import rect12 from '../assets/Rectangle 12.svg'; // Example blog images for "What to read next" section
import rect24 from '../assets/Rectangle 24.svg'; // Rectangle 24 image for content
import profileImage from '../assets/profile.svg'; // Profile image for the author section
import facebookIcon from '../assets/facebook.svg'; // Facebook icon
import twitterIcon from '../assets/twitter.svg'; // Twitter icon
import group10 from '../assets/Group 10.svg'; // Eyes image
import rect13 from '../assets/Rectangle 13.svg';
import rect14 from '../assets/Rectangle 14.svg';
import rect25 from '../assets/Rectangle 25.svg';
import rect26 from '../assets/Rectangle 39.svg';
import rect23 from '../assets/Rectangle 23.svg';

const BlogDetailsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Blog Title */}
      <div className="text-center">
        <h1 className="text-[36px] md:text-[54px] font-bold leading-[40px] md:leading-[54px] mb-6">
          A few words about this blog platform, Ghost, and how this site was made
        </h1>
        <p className="text-center mt-2 mb-10 font-mono text-lg sm:text-xl">
          Why Ghost (& Figma) instead of Medium, <br />
          WordPress or other options?
        </p>
      </div>

      {/* Main Blog Image */}
      <div className="mb-12 border-t-2 border-black">
        <img src={blogImage} alt="Blog Image" className="w-full h-auto object-cover" />
      </div>

      {/* Author Info Section */}
      <hr className="w-full md:w-[680px] h-[2px] border-2 border-black mx-auto my-8" />
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto mb-8 w-full md:w-[640px]">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={profileImage} alt="Author Profile" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-semibold">MIKA MATIKAINEN</p>
            <p className="text-gray-500">Apr 15, 2020 · 4 min read</p>
          </div>
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button className="p-2 w-16 h-12 flex justify-center items-center border-r border-gray-300">
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
          </button>
          <button className="p-2 w-16 h-12 flex justify-center items-center">
            <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Blog Content - First Paragraph */}
      <div className="w-full md:w-[640px] text-left mx-auto mb-10">
        <p className="font-medium text-[18px] md:text-[20px] leading-[28px] md:leading-[34px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
        </p>
        <div className="font-medium text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] mt-4 text-left mx-auto mb-10">
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
          </p>
        </div>
      </div>

      {/* Next on the Pipeline Section */}
      <h2 className="font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[51.2px] text-black mb-4 text-center">
        Next on the pipeline
      </h2>

      {/* Blog Content - Second Paragraph */}
      <div className="w-full md:w-[640px] text-left mx-auto mb-16">
        <p className="font-medium text-[18px] md:text-[20px] leading-[28px] md:leading-[34px]">
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <p className="font-medium text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] mt-4">
          Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-6">
        <img src={rect24} alt="Statue" className="w-full md:w-[854px] h-auto md:h-[570px] object-cover" />
      </div>

      {/* Image Caption */}
      <div className="w-full md:w-[481px] mx-auto text-center mb-8">
        <p className="font-medium text-[16px] leading-[22.4px] text-black-500">
          Image caption centered this way and I’ll make this a bit longer <br /> to indicate the amount of line-height.
        </p>
      </div>

      <div className="font-medium text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] mt-4 w-full md:w-[640px] mx-auto">
        <p>
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </p>
        <p className="mt-4">
          In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
        </p>
      </div>

      {/* A list looks like this */}
      <div className="w-full md:w-[640px] text-left mx-auto mb-10">
        <h3 className="font-medium text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] mt-4">
          A list looks like this:
        </h3>
        <ul className="list-none font-medium text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] mt-4">
          <li className="before:content-[''] before:block before:w-[6px] before:h-[6px] before:bg-black before:rotate-45 before:inline-block before:mr-2">
            First item in the list
          </li>
          <li className="before:content-[''] before:block before:w-[6px] before:h-[6px] before:bg-black before:rotate-45 before:inline-block before:mr-2">
            Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet
          </li>
          <li className="before:content-[''] before:block before:w-[6px] before:h-[6px] before:bg-black before:rotate-45 before:inline-block before:mr-2">
            Third item in the list
          </li>
        </ul>
      </div>

      <div className="font-medium text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] mt-4 w-full md:w-[640px] text-left mx-auto mb-10">
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </p>
      </div>

      {/* Thanks and Mika */}
      <div className="font-medium text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] mt-4 w-full md:w-[640px] text-left mx-auto mb-10">
        <p>Thanks for reading,</p>
        <p>Mika</p>
      </div>

      {/* Share Section */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center border border-[#EAEAEA] rounded-lg overflow-hidden shadow w-full md:w-[640px] h-[64px]">
          <button className="p-2 w-full h-full flex justify-center items-center border-r border-[#EAEAEA]">
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6 mr-2" />
            Share on Facebook
          </button>
          <button className="p-2 w-full h-full flex justify-center items-center">
            <img src={twitterIcon} alt="Twitter" className="w-6 h-6 mr-2" />
            Share on Twitter
          </button>
        </div>
      </div>

      {/* Tags Section */}
      <div className="w-full md:w-[640px] mx-auto text-left my-6">
        <p className="font-medium text-[16px] leading-[24px]">
          Tags: 
          <a href="#" className="underline text-black ml-2">product design</a>, 
          <a href="#" className="underline text-black ml-2">culture</a>
        </p>
      </div>

      {/* Dotted Line */}
      <div className="border-t-2 border-dotted border-gray-400 w-full md:w-[640px] mx-auto mb-10"></div>

      {/* Profile Section */}
      <div className="flex items-center mx-auto w-full md:w-[640px]">
        <img src={profileImage} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold text-[18px] inline">MIKA MATIKAINEN </p>
          <p className="text-[16px] text-gray-600 inline">
            is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.
          </p>
        </div>
      </div>

      {/* Black line with eyes */}
      <div className="w-full flex justify-center items-center my-10">
        <div className="w-full border-t-2 border-black relative">
          <img src={group10} alt="Eyes" className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* What to Read Next Section */}
      <div className="w-full text-center my-10">
        <h2 className="font-bold text-[36px] md:text-[44px] leading-[40px] md:leading-[52.51px] text-black mb-8">
          What to read next
        </h2>

        {/* Row 1 with 3 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mb-8">
          <div className="p-4 flex flex-col items-center">
            <button>
              <img src={rect13} alt="Blog 13" className="w-full md:w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h3 className="text-center font-medium text-[18px] md:text-[22px] leading-[26.4px]">
              Connecting artificial intelligence with digital product design
            </h3>
          </div>
          
          <div className="p-4 flex flex-col items-center">
            <button>
              <img src={rect14} alt="Blog 14" className="w-full md:w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h3 className="text-center font-medium text-[18px] md:text-[22px] leading-[26.4px]">
              Hello world, or, in other words, why this blog exists
            </h3>
          </div>
          
          <div className="p-4 flex flex-col items-center">
            <button>
              <img src={rect12} alt="Blog 25" className="w-full md:w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h3 className="text-center font-medium text-[18px] md:text-[22px] leading-[26.4px]">
              Here are some things you should know regarding how we work
            </h3>
          </div>
        </div>

        {/* Row 2 with 3 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mb-8">
          <div className="p-4 flex flex-col items-center">
            <button>
              <img src={rect25} alt="Blog 26" className="w-full md:w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h3 className="text-center font-medium text-[18px] md:text-[22px] leading-[26.4px]">
              A few words about this blog platform, Ghost, and how this site was made
            </h3>
          </div>

          <div className="p-4 flex flex-col items-center">
            <button>
              <img src={rect26} alt="Blog 23" className="w-full md:w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h3 className="text-center font-medium text-[18px] md:text-[22px] leading-[26.4px]">
              Updating list of 50+ sources on distributed teams
            </h3>
          </div>

          <div className="p-4 flex flex-col items-center">
            <button>
              <img src={rect23} alt="Blog 23" className="w-full md:w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h3 className="text-center font-medium text-[18px] md:text-[22px] leading-[26.4px]">
              How modern remote working tools get along with Old School Cowboy's methods
            </h3>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full md:w-[640px] mx-auto mt-12 border border-black">
        {/* Thick black line on top */}
        <div className="bg-black h-[12px] w-full"></div>

        {/* Content inside the border */}
        <div className="p-8 text-center">
          <h2 className="font-bold text-[28px] md:text-[36px] leading-[28px] md:leading-[28px] mb-4">
            Sign up for the newsletter
          </h2>

          <p className="text-[18px] md:text-[20px] font-normal leading-[28px] text-center mb-6">
            If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared.
          </p>

          {/* Input and Signup button */}
          <div className="flex items-center justify-center border border-black w-full md:w-[520px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full p-4 border-none focus:outline-none text-[18px]"
            />

            <div className="border-l border-black h-full"></div>

            <button className="bg-black text-white w-[139px] h-[60px] font-semibold">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;

import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../assets/image 2.svg'; // Import your 7+i Image
import rect12 from '../assets/Rectangle 12.svg';
import rect13 from '../assets/Rectangle 13.svg';
import rect14 from '../assets/Rectangle 14.svg';
import rect15 from '../assets/Rectangle 15.svg';
import rect16 from '../assets/Rectangle 16.svg';
import rect17 from '../assets/Rectangle 17.svg';
import rect18 from '../assets/Rectangle 18.svg';
import rect19 from '../assets/Rectangle 19.svg';
import rect20 from '../assets/Rectangle 20.svg';
import rect21 from '../assets/Rectangle 21.svg'; // New image
import rect22 from '../assets/Rectangle 22.svg'; // New image
import rect23 from '../assets/Rectangle 23.svg'; // New image

const BlogPage: React.FC = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      {/* Header Section with Main Image and Title */}
      <div className="text-center">
        <Link to="/blog-details">
          <img src={blogImage} alt="7+i Blog Image" className="mx-auto w-full max-w-[854px] h-auto" />
        </Link>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-8">
          A few words about this blog platform, Ghost, and how this site was made
        </h1>
        <br />
        {/* Why Ghost line with SF Mono font */}
        <p className="text-center mt-5 pt-2 font-mono text-lg sm:text-xl md:text-[20px] leading-6 md:leading-[34px]">
          Why Ghost (& Figma) instead of Medium, <br />
          WordPress or other options?
        </p>
        {/* Black line */}
        <hr className="w-full sm:w-[850px] h-[2px] border-2 border-black mx-auto my-8" />
      </div>

      {/* Articles Section */}
      <div className="mt-16 text-center">
        {/* All Articles heading with New York Extra Large font */}
        <h2 className="text-3xl md:text-[44px] leading-[40px] md:leading-[52.51px] font-bold text-center mb-12">
          All Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Cards */}
          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect12} alt="Blog 1" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">Here are some things you should know regarding how we work</h2>
          </div>

          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect13} alt="Blog 2" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">Granny gives everyone the finger, and other tips from OFFF Barcelona</h2>
          </div>

          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect14} alt="Blog 3" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">Hello world, or, in other words, why this blog exists</h2>
          </div>

          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect15} alt="Blog 4" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">Connecting artificial intelligence with digital product design</h2>
          </div>

          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect16} alt="Blog 5" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">It's all about finding the perfect balance</h2>
          </div>

          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect17} alt="Blog 6" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">I believe learning is the most important skill</h2>
          </div>

          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect18} alt="Blog 7" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">Clients are part of the team</h2>
          </div>

          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect19} alt="Blog 8" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">Here are some things you should know regarding how we work</h2>
          </div>

          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect20} alt="Blog 9" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">How modern remote working tools get along with Old School Cowboy's methods</h2>
          </div>

          {/* Additional Blog Cards */}
          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect21} alt="Blog 10" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">Exploring the art of digital design</h2>
          </div>

          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect22} alt="Blog 11" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">Creating seamless user experiences</h2>
          </div>

          <div className="p-4 transition flex flex-col items-center">
            <button>
              <img src={rect23} alt="Blog 12" className="w-full max-w-[304px] h-[176px] object-cover mb-4" />
            </button>
            <h2 className="text-center font-medium text-lg sm:text-[22px] leading-[26.4px]">Building the future of web development</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

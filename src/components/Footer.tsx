import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white w-full border-t border-gray-300 py-8">
      {/* Ensure full-width on large screens with padding */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20 md:gap-40 px-4 md:px-8 lg:px-16 xl:px-20">
        
        {/* Social Media Icons Section */}
        <div className="mr-20 mt-10 mb-6 md:mb-0 flex space-x-6 justify-center md:justify-start">
          <a href="#" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="#" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>

        {/* Footer Columns */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-full space-x-0 md:space-x-10">

          {/* Use Cases */}
          <div className="footer-column">
            <h4 className="text-xl font-semibold mb-7">Use Cases</h4>
            <ul className="list-none text-sm space-y-2">
              <li>UI Design</li>
              <li>UX Design</li>
              <li>Wireframing</li>
              <li>Diagramming</li>
              <li>Brainstorming</li>
              <li>Online Whiteboard</li>
              <li>Team Collaboration</li>
            </ul>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h4 className="text-xl font-semibold mb-7">Explore</h4>
            <ul className="list-none text-sm space-y-2">
              <li>Design</li>
              <li>Prototyping</li>
              <li>Development Features</li>
              <li>Design Systems</li>
              <li>Collaboration Features</li>
              <li>Design Process</li>
              <li>FigJam</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h4 className="text-xl font-semibold mb-7">Resources</h4>
            <ul className="list-none text-sm space-y-2">
              {/* Blog Link */}
              <li>
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>Best Practices</li>
              <li>Colors</li>
              <li>Color Wheel</li>
              <li>Support</li>
              <li>Developers</li>
              <li>Resource Library</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

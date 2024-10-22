import React from 'react';
import Logo from './Logo';
import FooterSection from './FooterSection';
import SocialIcons from './SocialIcon';

interface FooterProps {
  companyLinks: Array<{ text: string; href: string }>;
  resourceLinks: Array<{ text: string; href: string }>;
  legalLinks: Array<{ text: string; href: string }>;
}

const Footer: React.FC<FooterProps> = ({ companyLinks, resourceLinks, legalLinks }) => {
  return (
    <footer className="flex flex-col px-14 lg:px-[5.5em] py-16 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap sm:flex-nowrap gap-10 w-full lm:justify-around max-md:max-w-full">
        <Logo />
        <div className="flex-auto self-start max-md:max-w-full ">
          <div className="flex justify-end gap-10 max-md:flex-col ">
            <FooterSection title="Company" links={companyLinks} />
            <FooterSection title="Resources" links={resourceLinks} />
            <FooterSection title="Legal" links={legalLinks} />
          </div>
        </div>
      </div>
      <hr className="shrink-0 mt-16 h-px border border-[footer-line] border-solid max-md:mt-10 max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between mt-10 text-base text-white max-md:max-w-full">
        <p className="my-auto">©2024 Ripple Nexus. All rights reserved</p>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
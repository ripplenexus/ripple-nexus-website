import React from 'react';

interface FooterSectionProps {
  title: string;
  links: Array<{ text: string; href: string }>;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col w-fit p-2 pt-0 max-md:ml-0 max-md:w-full justify-start">
      <nav className="flex flex-col  items-start text-base font-medium text-white whitespace-nowrap ">
        <h3 className="self-stretch  font-[400] font-[Poppins]">{title}</h3>
        {links.map((link, index) => (
          <a key={index} href={link.href} className="mt-2 font-[300] text-highlight-1 first:mt-4">
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default FooterSection;
import React from 'react';
import FooterContainer from './Footer/FooterContainer';
import WhatsAppForm from './WhatsApp';

const MyComponent: React.FC = () => {
  const companyLinks = [
    { text: 'Blog', href: '/blog' },
    { text: 'Careers', href: '/career' }
  ];

  const resourceLinks = [
    { text: 'Services', href: '/services' },
    { text: 'About Us', href: '/about' },
    { text: 'Contact Us', href: '/about#contact-us' }
  ];

  const legalLinks = [
    { text: 'Terms of service', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' }
  ];

  return (
    <>
    <WhatsAppForm/>
    <div id='footer' className="flex flex-col">
      <FooterContainer 
        companyLinks={companyLinks}
        resourceLinks={resourceLinks}
        legalLinks={legalLinks}
      />
    </div>
    </>
  );
};

export default MyComponent;
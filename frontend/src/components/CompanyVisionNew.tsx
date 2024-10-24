import React, { useEffect, useState } from 'react';
import '../styles/companyVision.css';


const CompanyVision: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in') as NodeListOf<HTMLElement>;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.3 }
    );
    elements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div className='company-vision-background'>
    <section className="company-vision-container" id="CompanyVision">
      <div className="content-wrapper">
        <div className="fade-in title-section">
          <h2 className="title">
            Our Vision
            <span className="underline"></span> 
          </h2>
          <p className="subtitle">
            Innovating the future, one connection at a time. We empower creativity and drive transformation through technology.
          </p>
        </div>


        <div className="fade-in vision-card">
          <p className="vision-text">
            I chose the name <span className="highlight">‘Ripple Nexus’</span> to reflect our core philosophy and strategic vision.
            The 'Ripple' symbolizes our belief in the power of small, thoughtful actions to create waves of significant change.
            It represents our approach to innovation—starting with a focused initiative that expands its influence far and wide.
            <br /><br />
            ‘Nexus,’ on the other hand, signifies being a central point of connection, where diverse ideas, talents, and technologies
            come together to create something much greater than the sum of its parts.
            <br /><br />
            Together, 'Ripple Nexus' embodies the idea of being a dynamic hub that initiates positive, far-reaching impact.
            It's about creating a network of transformative connections that can inspire, influence, and drive meaningful change across various domains.
            This name reflects our aspiration to not just be a participant in our field but to be the catalyst that brings together
            the right elements to shape the future.
          </p>
          <div className="founder-info fade-in">
            <p className="founder-name">Ashutosh Shukla,</p>
            <p className="position">Founder and Lead Consultant, Ripple Nexus</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default CompanyVision;
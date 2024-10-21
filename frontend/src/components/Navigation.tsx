import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { ReactSVG } from 'react-svg';
import '../styles/css/Navigation.css';
import RLogo from '../assets/img/RippleLogos/R_logo.png';
import RLogoBW from '../assets/img/RippleLogos/R_logoBW.png';
// import RippleNexusLogo from '../assets/img/RippleLogos/RippleNexus_logo.png';
import RippleNexusLogoBW from '../assets/img/RippleLogos/RippleNexusBW.png';
import { startAnimation, endAnimation, showElement, hideElement } from '../utils/Animation';


const Navigation: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  // for logo animation part
  useEffect(() => {
    const handleScroll = () => {
      const R_logo = document.getElementById('R_logo') as HTMLElement;
      const RippleNexus_logo = document.getElementById('RippleNexus_logo') as HTMLElement;
      const MenuIcon = document.getElementById('menu-icon') as HTMLElement;
      const triggerPoint = window.innerHeight / 8;
      const windowWidth = window.innerWidth;

      if (window.scrollY > triggerPoint) {
        //for hamburger animation
        MenuIcon.classList.remove('bg-color-light');
        MenuIcon.classList.add('bg-color-dark');
        //for logo animation
        if (windowWidth > 650) {
          R_logo.classList.add('move-left');
          R_logo.classList.remove('hidden');
          RippleNexus_logo.style.display = 'block';
          setTimeout(() => {
            RippleNexus_logo.classList.add('show');
          }, 10);
        } else{
          R_logo.setAttribute('src', `${RLogoBW}`);
        }

      } else {
        // for hamburger menu animation
        MenuIcon.classList.remove('bg-color-dark');
        MenuIcon.classList.add('bg-color-light');
        //for logo animation
        R_logo.classList.remove('move-left');
        RippleNexus_logo.classList.remove('show');
        if(windowWidth > 650){
          setTimeout(() => {
            RippleNexus_logo.style.display = 'none';
            // R_logo.setAttribute('src', `${RLogoBW}`);
          }, 10);
        } else{
          R_logo.setAttribute('src', `${RLogo}`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //for menu bar animation
  useEffect(() => {
    const toggleMenu = () => {
      // const menuIcon  = document.getElementById('menu-icon') as HTMLElement;
      const windowWidth = window.innerWidth;
      if (windowWidth < 920) {
        endAnimation('.menu-icon', 'fade-out-left');
        endAnimation('.nav-menu li', 'fade-in-left');
        hideElement('.nav-menu');
        const showTime = startAnimation('.nav-menu li', 'fade-out-right');
        setTimeout(() => {
          showElement('.menu-icon', 'inline-block');
          startAnimation('.menu-icon', 'fade-in-right');
        }, showTime / 4);
      } else {
        showElement('.nav-menu', 'flex');
        showElement('.nav-menu li', 'inline');
        endAnimation('.menu-icon', 'fade-in-right');
        endAnimation('.nav-menu li', 'fade-out-right');
        const showTime = startAnimation('.menu-icon', 'fade-out-left');
        setTimeout(() => {
          hideElement('.menu-icon');
          startAnimation('.nav-menu li', 'fade-in-left');
        }, showTime / 4);
      }
    }

    const events = ['resize', 'load']
    events.forEach((event) => {
      window.addEventListener(event, toggleMenu);
    })

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, toggleMenu);
      });
    };

  }, [])

  return (
    <nav className="navbar" style={{ position: "sticky" }}>
      <div className="brand">
        {/* <img id="RippleNexus_logo" height="auto" width="50%" src={RippleNexusLogo} alt="logo" className='hidden' /> */}
        <img id="RippleNexus_logo" height="auto" width="200px" src={RippleNexusLogoBW} alt="logo" className='hidden' />
        {/* <h1 id="RippleNexus_logo" className='hidden'>Ripple Nexus</h1> */}
        <img id="R_logo" height="auto" width="50em" src={RLogo} alt="logo" />
      </div>
      <div className="nav-right">
        {/* {showMenu ? '∆' : '☰'} */}
        <button id='menu-icon' className='menu-icon bg-color-light' onClick={() => setShowMenu(!showMenu)}>☰</button>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
        {
          (showMenu) && (
            <ul className="small-window-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          )
        }

        <button className="quote-button" onClick={()=>navigate('/about#contact-us')}><label>Request a Quote</label></button>
      </div>
    </nav>
  );
};

export default Navigation;

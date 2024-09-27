import React from 'react';
import '../../public/static/css/Navigation.css';


const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                Ri<span className="green">pp</span>le Nexus
            </div>
            <div className="nav-right">
                <ul className="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#career">Career</a></li>
                    <li><a href="#about">About Us</a></li>
                </ul>
                <button className="quote-button">Request a Quote</button>
            </div>
        </nav>
    );
};

export default Navigation;

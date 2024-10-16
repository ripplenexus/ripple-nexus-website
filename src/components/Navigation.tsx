import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/Navigation.css';


const Navigation: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                Ri<span className="green">pp</span>le Nexus
            </div>
            <div className="nav-right">
                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/career">Career</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
                <button className="quote-button"><label>Request a Quote</label></button>
            </div>
        </nav>
    );
};

export default Navigation;

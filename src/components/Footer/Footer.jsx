import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="flex items-center justify-center space-x-4 font-bold text-lg text-teal-500
            p-4 primary-content text-base-content">
                <Link to="/about" className="text-teal-600 text-lg hover:text-teal-700">About</Link>
                <Link to="/contact" className="text-teal-600 text-lg hover:text-teal-700">Contact</Link>
                <Link to="/team" className="text-teal-600 text-lg hover:text-teal-700">Team</Link>

            </div>
            <div className="footer footer-center p-4 primary-content text-base-content">
                <p>Copyright <b>©</b> 2024 - All right reserved by DataNeuron</p>
            </div>
        </div>);
};

export default Footer;
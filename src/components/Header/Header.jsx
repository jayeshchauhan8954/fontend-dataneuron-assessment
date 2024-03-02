import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (<div>

        <div
            className="flex flex-col md:flex-row justify-between items-center px-20 md:h-28 p-4 border-b-2 border-gray-300">
            <div className="font-bold text-teal-600 text-2xl"><Link to="/">Data<span
                className="text-orange-400">Neuron</span></Link></div>
            <div className="flex">
                <ul className="menu-horizontal space-x-4 flex">
                    <li><Link to="/home"
                        className="font-bold text-teal-600 border-2 border-teal-600 py-2 px-4 rounded-full hover:text-teal-700 hover:border-teal-700">Home
                    </Link>
                    </li>
                    <li><Link to="/sing-in"
                        className="font-bold text-teal-600 border-2 border-teal-600 py-2 px-4 rounded-full hover:text-teal-700 hover:border-teal-700">Log
                        In</Link>
                    </li>
                    <li><Link to="/sign-up"
                        className="font-bold text-white bg-teal-600 py-2 px-4 rounded-full hover:bg-teal-700">Sign
                        Up</Link></li>
                </ul>
            </div>
        </div>
    </div>
    );
};
export default Header;
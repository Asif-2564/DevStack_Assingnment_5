// import React from 'react';
import Logo from "../assets/logo-text.png";
const Navbar = () => {
    return (

        <nav className="flex justify-between items-center container mx-auto mt-5 mb-5">
            <img src={Logo} alt="logo picture"/>
            <ul className="flex justify-content gap-4">
                <li className="text-pink-600">Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex justify-content items-center gap-2">
                <button className="btn btn-active bg-white rounded-2xl">Sign In </button>
                <button className="btn btn-secondary rounded-2xl">Sign Up</button>
            </div>

        </nav>
        );
};

export default Navbar;
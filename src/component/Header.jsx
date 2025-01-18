import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/logo.svg";

const Header = () => {
    return (
        <header className="p-7 sm:px-36 sm:flex justify-between items-center max-w-[1320px] mx-auto ">
            <div className="">
                <Link to="/">
                    <img className="w-32" src={logo} alt="" />
                </Link>
            </div>
            <div className="">
                <ul className="flex gap-8">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Services</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Project</Link>
                    </li>
                    <li>
                        <Link to="/">Help</Link>
                    </li>
                </ul>
            </div>
            <div className="m-5 sm:m-0">
                <div className="sm:flex sm:gap-8 gap-20 p-5 text-center text-[#0075FF] items-center ">
                    <Link to="/">Sign In</Link>
                    <Link to="/" className="bg-[#8ec3ff] ml-5 hover:bg-[#0075FF] hover:text-white px-12 py-4 rounded-bl-full rounded-r-full duration-500">Sign up</Link>
                </div>
            </div>

        </header>
    );
};

export default Header;
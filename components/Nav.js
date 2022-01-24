import React from "react";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import { ChevronDownIcon } from "@heroicons/react/solid"

const Nav = () => {
    return (
        <nav className="flex justify-between py-4 px-10 items-center border-2 w-[100%]">
            <div className="w-[150px]">
                <Image src={logo} className="" />
            </div>
            <ul className="m-0 p-0 flex gap-12 items-center">
                <li className="flex gap-3 items-center"> 
                    <a href="#">Our Solutions</a>
                <ChevronDownIcon className="h-5 w-5" />
                </li>
                <li><a href="#">Developers</a></li>
                <li className="flex gap-3 items-center">
                    <a href="#">Resources</a>
                    <ChevronDownIcon className="h-5 w-5" />
                </li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Sign In</a></li>
                    <button className="bg-[#f5a623] rounded-[4px] px-4 py-3 uppercase text-sm  ">create account</button>
                
            </ul>
        </nav>
    );
}

export default Nav;
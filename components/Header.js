import React from "react";
import Nav from "./Nav";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import max from "../assets/images/max.ng.png";
import samke from "../assets/images/samke-mhlongo.png";
import hygeia from "../assets/images/hygeia.png";
import krispy from "../assets/images/krispy-kreme-counter.png";

const Header = () => {
    return(
        <header className="bg-[#dadef5] h-[670px] w-full px-[4rem] pt-7">
            <Nav />
            <div className="grid grid-cols-4 justify-between mt-[3rem]">
                <div className="col-span-2 mt-[5rem]">
                    <div>
                        <h2 className="text-[3rem] font-semibold pr-12 mb-4 text-[#0f1c70]">Grow your business with Flutterwave.</h2>
                        <p className="text-[1.6rem] pr-[8rem] text-[#4f4f4f]">The easiest way to make and accept payments from customers anywhere in the world.</p>
                    </div>
                    
                    <div className="flex gap-3 mt-8">
                        <button className="flex gap-5 shadow-md items-center bg-[#f5a623] rounded-[4px] px-4 py-4 uppercase text-sm  ">
                            <span className="text-white">Create account</span>
                            <ChevronRightIcon className="h-5 w-5 text-white" />
                        </button>
                        <button className="flex gap-5 shadow-md items-center bg-[#ffffff] rounded-[4px] px-4 py-4 uppercase text-sm">
                            <span className="">Speak with us</span>
                            <ChevronRightIcon className="h-5 w-5 " />
                        </button>
                    </div>
                </div>

                <div className="col-span-2 justify-self-end">
                    <div className="grid grid-cols-2 gap-5">
                        <Image src={max} alt="maxng Logo" height={120} width={200} className="" />
                        <Image src={samke} alt="Samke" className="" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <Image src={krispy} alt="Krispy Logo" />
                        <Image src={hygeia} alt="Hygeia Logo"  className="rounded-md object-cover" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
import Image from "next/image";
import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import alat from "../assets/images/alat.svg";
import hotels from "../assets/images/hotels.ng.svg";
import whogohost from "../assets/images/whogohost.svg";
import uber from "../assets/images/uber.svg";
import booking from "../assets/images/booking.com.svg";
import nairabox from "../assets/images/nairabox.svg";
import flywire from "../assets/images/flywire.svg";
import wakanow from "../assets/images/wakanow.svg";
import jumia from "../assets/images/jumia.svg";
import barter from "../assets/images/barter.svg";
import fibre from "../assets/images/fibre.svg";
import gigm from "../assets/images/gigm.svg";
import max from "../assets/images/maxng.svg";
import quidax from "../assets/images/quidax.svg";
import fruits from "../assets/images/fruits2go.svg";
import hygeia from "../assets/images/hygeia.svg";
import muster from "../assets/images/muster.svg";

const BrandsLogo = () => {
    return(

                <div className="brand-container">
                    <div className="grid grid-cols-3 gap-5 brands">
                        <div className="shadow-lg flex items-center justify-center py-4 px-2 mb-5">
                            <Image src={whogohost} width={160} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-4 px-2 mb-5">
                            <Image src={hotels} width={160} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-4 px-2 mb-5">
                            <Image src={alat} width={160} />
                        </div>
                        
                        

                        <div className="shadow-lg flex items-center justify-center py-4 px-2 mb-5">
                            <Image src={uber} width={170} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-4 px-2 mb-5">
                            <Image src={booking} width={170} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-4 px-2 mb-5">
                            <Image src={nairabox} width={170} />
                        </div>

                        <div className="shadow-lg flex items-center justify-center py-4 px-2 mb-5">
                            <Image src={flywire} width={170} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-4 px-2 mb-5">
                            <Image src={wakanow} width={170} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-4 px-2 mb-5">
                            <Image src={jumia} width={170} />
                        </div>

                        <div className="shadow-lg flex items-center justify-center py-4 px-2">
                            <Image src={barter} width={170} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-4 px-2">
                            <Image src={fibre} width={170} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-4 px-2">
                            <Image src={gigm} width={170} />
                        </div>

                        <div className="shadow-lg flex items-center justify-center py-2 px-2">
                            <Image src={max} width={220} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-2 px-2">
                            <Image src={quidax} width={200} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-2 px-2">
                            <Image src={fruits} width={200} />
                        </div>

                        <div className="shadow-lg flex items-center justify-center py-4 px-2">
                            <Image src={flywire} width={170} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-4 px-2">
                            <Image src={hygeia} width={170} />
                        </div>
                        <div className="shadow-lg flex items-center justify-center py-4 px-2">
                            <Image src={muster} width={170} />
                        </div>
                    </div>
                </div>
    );
}

export default BrandsLogo;
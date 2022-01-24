import Image from "next/image";
import React from "react";
import pos from "../assets/images/pos.jpg";
import { CheckIcon } from "@heroicons/react/solid";

const PaymentTypes = () => {
    return(
        <section className="bg-[#f4f6f8] px-[4rem] py-[6.5rem]">
            <h2 className="text-[#0f1c70] text-center text-[2rem] font-semibold mb-[4rem]">Create seamless payment <br></br> experiences for your customers.</h2>
            <div className="grid grid-cols-2 gap-12">
                <Image src={pos} className="rounded-md" />
                <div className="justify-self-center pl-12">
                    <h3 className="font-semibold text-[2.6rem] mb-5 pr-10">Accept payments anywhere.</h3>
                    <p className="text-[#333] text-[1.2rem] mb-10">One platform that lets you sell wherever your customers are — online, in‑person, anywhere in the world, and everywhere in‑between.</p>

                    <div className="flex justify-between gap-10 mb-8">
                        <div>
                            <h4 className="mb-3 text-lg text-[#0f1c70] font-semibold">Online (Website &amp; Mobile)</h4>
                            <p className="text-[#333]">Sell online with an ecommerce website, Mobile App and more.</p>
                        </div>
                        <div>
                            <h4 className="mb-3 text-lg text-[#0f1c70] font-semibold">POS (Point Of Sale)</h4>
                            <p className="text-[#333]">Sell in-person at your store locations, pop-ups, concerts.</p>
                        </div>
                    </div>

                    <div className="mb-9">
                        <h4 className="mb-3 text-lg text-[#0f1c70] font-semibold">Reach more people with more payment methods</h4>
                        <p className="text-[#333]">With little to no effort, remove the boundaries to scaling your business and reach more customers with just one platform.</p>
                    </div>


                    <div className="flex gap-12">
                        
                        <div>
                            <div className="flex items-center gap-4 mb-7">
                                <p className="h-[25px] w-[25px] rounded-full bg-[#d3d7f2] flex justify-center items-center">
                                    <CheckIcon className="h-4 w-4 text[#3B4796]" />
                                </p>
                                <p> Debit and Credit Cards</p>
                            </div>

                            <div className="flex items-center gap-4 mb-7">
                                <p className="h-[25px] w-[25px] rounded-full bg-[#d3d7f2] flex justify-center items-center">
                                    <CheckIcon className="h-4 w-4 text[#3B4796]" />
                                </p>
                                <p>Mobile Money</p>
                            </div>

                            <div className="flex items-center gap-4 mb-7">
                                <p className="h-[25px] w-[25px] rounded-full bg-[#d3d7f2] flex justify-center items-center">
                                    <CheckIcon className="h-4 w-4 text[#3B4796]" />
                                </p>
                                <p>M-Pesa</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <p className="h-[25px] w-[25px] rounded-full bg-[#d3d7f2] flex justify-center items-center">
                                    <CheckIcon className="h-4 w-4 text[#3B4796]" />
                                </p>
                                <p className="text-[#333]">Bank Transfer</p>
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center gap-4 mb-7">
                                <p className="h-[25px] w-[25px] rounded-full bg-[#d3d7f2] flex justify-center items-center">
                                    <CheckIcon className="h-4 w-4 text[#3B4796]" />
                                </p>
                                <p>Bank Account</p>
                            </div>

                            <div className="flex items-center gap-4 mb-7">
                                <p className="h-[25px] w-[25px] rounded-full bg-[#d3d7f2] flex justify-center items-center">
                                    <CheckIcon className="h-4 w-4 text[#3B4796]" />
                                </p>
                                <p>POS</p>
                            </div>

                            <div className="flex items-center gap-4 mb-7">
                                <p className="h-[25px] w-[25px] rounded-full bg-[#d3d7f2] flex justify-center items-center">
                                    <CheckIcon className="h-4 w-4 text[#3B4796]" />
                                </p>
                                <p>Visa QR</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <p className="h-[25px] w-[25px] rounded-full bg-[#d3d7f2] flex justify-center items-center">
                                    <CheckIcon className="h-4 w-4 text[#3B4796]" />
                                </p>
                                <p className="text-[#333]">USSD</p>
                            </div>
                        </div>

                    </div>


                    
                </div>

            </div>
        </section>
    );
}

export default PaymentTypes;
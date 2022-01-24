import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const Action = () => {
    return(
        <section className="bg-[#ffffff] px-[4rem] py-[5rem] flex flex-col justify-center items-center">
            
                <h3 className="font-semibold text-[2.2rem] mb-2">Get started now to grow your business.</h3>
                <p className="text-[#333] text-[1.2rem] mb-10">Create an account or get in touch with us.</p>
                <div className="flex gap-3 mt-3">
                        <button className="flex gap-7 shadow-md items-center bg-[#f5a623] rounded-[4px] px-4 py-4 uppercase text-sm  ">
                            <span className="text-white">Get started</span>
                            <ChevronRightIcon className="h-5 w-5 text-white" />
                        </button>
                        <button className="flex gap-5 shadow-md items-center bg-[#ffffff] rounded-[4px] px-4 py-4 uppercase text-sm">
                            <span>Speak with us</span>
                            <ChevronRightIcon className="h-5 w-5" />
                        </button>
                </div>
            
        </section>
    );
}

export default Action;
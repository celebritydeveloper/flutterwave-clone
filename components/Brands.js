import React from "react";
import BrandsLogo from "./BrandsLogo";

const Brands = () => {
    return(
        <section className="bg-[#f4f6f8] px-[4rem] py-12">
            <div className="grid grid-cols-2 gap-12">

                <BrandsLogo />
                
                <div className=" pl-12 flex flex-col justify-center">
                    <h3 className="font-semibold text-[2.4rem] mb-5 pr-10">The best businesses all over the world, big and small, trust Flutterwave for growth.</h3>
                    <p className="text-[#333] text-[1.2rem] mb-10">Flutterwave supports some of the best businesses all over the world.</p>

                    <div className="text-[#f5a623] text-sm">
                        <a href="#" className="underline">CHECK OUT OUR CUSTOMER SUCCESS STORIES</a>
                    </div>

                </div>
                

            </div>
        </section>
    );
}

export default Brands;
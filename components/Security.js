import Image from "next/image";
import React from "react";
import pos from "../assets/images/pos.jpg";

const Security = () => {
    return(
        <section className="bg-[#f4f6f8] px-[4rem] py-[6.5rem]">
            <div className="grid grid-cols-2 gap-12">
                <Image src={pos} className="rounded-md" alt="POS" />
                <div className="justify-self-center pl-12">
                    <h3 className="font-semibold text-[2.6rem] mb-5 pr-10">Safety and security guaranteed.</h3>
                    <p className="text-[#333] text-[1.2rem] mb-10">At Flutterwave, we take security seriously so every payment made on our platform is 100% secure, even exceeding industry standard.</p>

                    <div className="mb-9">
                        <h4 className="mb-3 text-lg text-[#0f1c70] font-semibold">ISO 27001 &amp; 22301 Certification</h4>
                        <p className="text-[#333]">The ISO 27001 &amp; 22301 certification means that we have acceptable business practices and processes, including a robust business continuity plan.</p>
                    </div>

                    <div className="mb-9">
                        <h4 className="mb-3 text-lg text-[#0f1c70] font-semibold">PA DSS &amp; PCI DSS Compliant</h4>
                        <p className="text-[#333]">This certification is proof that Flutterwave as a payment gateway processor has satisfied highest level of Security Audit.</p>
                    </div>

                    
                </div>

            </div>
        </section>
    );
}

export default Security;
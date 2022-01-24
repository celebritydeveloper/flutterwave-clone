import React from "react";

const Cards = () => {
    return(
        <section className="bg-[#ffffff] px-[4rem] py-12">
            <div className="grid grid-cols-2 gap-12">
                
                <div className="justify-self-center pr-12">
                    <h3 className="font-semibold text-[2.6rem] mb-5 pr-10">Issue cards, create new businesses.</h3>
                    <p className="text-[#333] text-[1.2rem] mb-10">Create cards for your team, add spending limits, make them site-specific and so much more.</p>

                    <div className="mb-7">
                        <h4 className="mb-3 text-lg text-[#0f1c70] font-semibold">Create virtual Mastercard and VISA cards</h4>
                        <p className="text-[#333]">Using the Flutterwave API, you can instantly create and manage virtual cards. Cards can be used instantly through mobile wallets and global websites.</p>
                    </div>

                    <div className="mb-12">
                        <h4 className="mb-3 text-lg text-[#0f1c70] font-semibold">CCreate new FinTech businesses</h4>
                        <p className="text-[#333]">With just a few lines of Issuing API code, the possibilities for your new FinTech business(es) are endless.</p>
                    </div>

                    <div className="text-[#f5a623] text-sm">
                        <a href="#" className="underline">LEARN MORE ABOUT CARD ISSUING</a>
                    </div>

                </div>

                <video autoPlay="true" width="250" height="450">

                <source src="../assets/images/cards.mp4" type="video/mp4" />

                Sorry, your browser doesn't support embedded videos.
            </video>
                

            </div>
        </section>
    );
}

export default Cards;
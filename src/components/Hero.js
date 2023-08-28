import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <section id="home" className="hero-section bg-black h-screen">
      <div className="relative flex items-center min-h-full overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover object-center" src="./images/herobg.png" alt="Hero image" />
          <div className="absolute inset-0 bg-[#111111] opacity-50"></div>
        </div>
        <div className="relative w-full h-full z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <h1 className=" text-white font-bold max-sm:text-5xl sm:text-[60px]">
            Hi!
            <br/>
            Welcome to my website.</h1>
          <div className="mt-8">
            <Button title="HIRE ME" image={true} link="#about-me" />
          </div>
        </div>
        {/* <a href="#about-me" className="absolute bottom-[60px] left-[-50px] text-white py-3 px-6 font-light uppercase btn-scroll z-10">scroll down
          <img className="inline invert h-[20px] mb-[4px] ml-2" src="./images/chevron-right.svg" />
          <span className="animate-ping absolute top-[18px] right-[32px] h-3 w-3 rounded-full bg-red opacity-50"></span>
        </a> */}
        <a href="#about-me" className="scroll-down animate-me animated">scroll down <img src="images/scroll-down-arrow.png" alt="arrow"/></a>
      </div>
    </section>

  )
}

export default Hero
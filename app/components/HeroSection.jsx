"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  const handleDownloadCv = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/CV/S.Niroshanan_SE_intern.pdf";
    downloadLink.click();
  };
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Hello, I&#39;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Niroshanan", 1000, "an Undergraduate", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a fourth-year student at the University of Kelaniya, currently
            pursuing a BSc Honors degree in Computer Science with a
            specialization in Data Science. With a solid foundation in
            programming languages like Java, C#, and C, as well as expertise in
            web technologies such as HTML, CSS, JavaScript, React, and Next.js.
          </p>
          <div>
            {/* <button className="px-6 py-3 pd-4 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 text-white hover:bg-white sm: mb-4 font-bold">
              Hire me
            </button> */}
            <button
              onClick={handleDownloadCv}
              className="px-1 py-1 pd-4 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 text-white hover:bg-slate-300 hover:text-black font-bold"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[350px] lg:h-[350px]  ">
            <Image
              src={"/images/dev.png"}
              alt="Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              height={500}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

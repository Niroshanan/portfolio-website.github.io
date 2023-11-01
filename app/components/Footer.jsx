import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";

const Footer = () => {
  return (
    // <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent">
    //   <div className="container p-4 flex justify-between">
    //     <div className="grid grid-cols-1 md:grid-cols-2">
    //       <span>
    //         <Image
    //           src={"/images/Contact.JPG"}
    //           alt="logo"
    //           className="rounded-lg bg-[#181818] hidden md:block ml-12"
    //           height={75}
    //           width={75}
    //         />
    //       </span>
    //       <div >
    //         <h5 className="text-slate-400 text-xl font-extrabold">Sathananthan Niroshanan</h5>
    //         < p className="text-slate-400"> snirosh12@gmail.com</p>
    //         < p className="text-slate-400"> 0756740580</p>
    //       </div>
    //     </div>
    //     <p className="text-slate-500">All rights reserved</p>
    //   </div>
    // </footer>
    <footer>
      <div className="grid py-8 m-auto grid-cols-1 md:grid-cols-12 footer border border-t-[#33353F] border-l-transparent border-r-transparent">
        <div className="col-span-2">
          <Image
            src={"/images/Contact.JPG"}
            alt="logo"
            className="rounded-lg bg-[#181818] m-auto"
            height={100}
            width={100}
          />
        </div>
        <div className="col-span-7 text-center md:text-left">
          <div>
            <h5 className="text-slate-200 text-xl font-extrabold">
              Sathananthan Niroshanan
            </h5>
            <p className="text-slate-400"> snirosh12@gmail.com</p>
            <p className="text-slate-400"> 0756740580</p>
            <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Niroshanan" target="blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/niroshanan1998" target="blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
          </div>
        </div>
        <div className="col-span-3 text-center md:text-left  md:flex md:flex-row md:justify-end ">
          <div className="md:flex md:flex-col md:justify-end md:pr-8">
          <p className="text-slate-400 ">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

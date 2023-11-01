import Image from "next/image";
import Link from "next/link";
import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";


const ContactDetails = () => {
  return (
    <section className="text-white" id="contact">
      <hr className="mt-8 border border-fuchsia-500" />
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex items-center">
        <Image
          src="/images/Contact.JPG"
          width={200}
          height={350}
          alt="about-image"
          className="mx-auto md:mx-0 md:w-fit md:h-max"
        />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sathananthan Niroshanan</h2>
          <p className="text-base lg:text-lg"></p>
          <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;

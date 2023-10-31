import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"/"}>
            <Image src={GithubIcon} alt="GitHubIcon" />
          </Link>
          <Link href={"/"}>
            <Image src={LinkedInIcon} alt="LinkedInIcon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col ">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33355F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 px-2"
              required
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-[#18191E] border border-[#33355F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 px-2"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Leave your message here"
              className="bg-[#18191E] border border-[#33355F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 px-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-2 rounded-lg  w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

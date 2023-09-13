import React from "react";
import DefaultImage from "../Default/DefaultImage";

const Footer = () => {
  return (
    <div className="mt-[3rem] space-y-[2.25rem]">
      <div
        aria-label="social media links"
        className="flex justify-center space-x-2 md:space-x-[3rem]"
      >
        <DefaultImage src="/facebook.svg" width={24} height={27} />
        <DefaultImage src="/instagram.svg" width={24} height={27} />
        <DefaultImage src="/twitter.svg" width={24} height={27} />
        <DefaultImage src="/youtube.svg" width={24} height={21} />
      </div>

      <div className="space-y-2 flex flex-col items-center md:flex-row md:justify-center md:space-y-[0] md:space-x-[3rem]">
        <p className="text-18 text-spb font-bold">Conditions of Use</p>
        <p className="text-18 text-spb font-bold">Privacy & Policy</p>
        <p className="text-18 text-spb font-bold">Press Room</p>
      </div>

      <div className="text-18 text-gray font-bold text-center">
        © {new Date().getFullYear()} MovieBox by Divine Obi{" "}
      </div>
    </div>
  );
};
export default Footer;

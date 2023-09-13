import React, { FC } from "react";
import DefaultImage from "../Default/DefaultImage";

interface LogoProps {
  color: boolean;
}

const Logo: FC<LogoProps> = ({ color }) => {
  return (
    <>
      <DefaultImage
        src="/tv.png"
        className="bg-transparent"
        height={50}
        width={50}
      />
      <h1
        aria-label="app title"
        className={`font-bold text-[24px] ${
          color ? "text-white" : "text-black"
        } ml-[1rem]`}
      >
        MovieBox
      </h1>
    </>
  );
};
export default Logo;

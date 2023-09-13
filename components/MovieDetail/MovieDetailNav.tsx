import React, { FC } from "react";
import DefaultImage from "../Default/DefaultImage";
import Logo from "../Header/Logo";

const MovieDetailNav: FC = () => {
  return (
    <div className="border-[#0000004d] custom hidden lg:block w-[250px] border-1 md:pt-[3rem] h-[780px]">
      <div className="flex space-x-1 items-center mx-1">
        <Logo color={false} />
      </div>

      <div className="lg:flex flex-col mt-[3rem] space-y-1 mb-[2rem]">
        <button className="py-1 flex justify-center items-center">
          <DefaultImage src="/Home.png" height={25} width={25} />
          <span className="ml-[7px]">Home</span>
        </button>
        <button className="flex justify-center items-center border-r-[5px] py-1 bg-[#be123c1a] border-rose">
          <DefaultImage src="/MovieProjector.png" height={20} width={20} />
          <span className="ml-[7px]">Movies</span>
        </button>
        <button className="py-1 flex justify-center items-center">
          <DefaultImage src="/TVShow.png" height={25} width={25} />
          <span className="ml-[7px]"> TV Series</span>
        </button>
        <button className="py-1 flex justify-center items-center">
          <DefaultImage src="/Calendar.png" height={30} width={30} />

          <span className="ml-[5px]"> Upcoming</span>
        </button>
      </div>

      <div className="bg-[#f8e7eb66] border-1 mx-[2.5rem] rounded-[20px] border-[#be123cb3] pt-2 px-1 pb-1 flex flex-col">
        <p className="text-[#333333cc] font-[600] text-[0.9375rem]">
          Play movie quizes and earn free tickets
        </p>
        <p className="my-0.5 text-12 text-[#666]">50k people are playing now</p>

        <button className="px-0.5 py-[5px] text-12 mx-auto rounded-[30px] text-rose bg-[#be123c33]">
          Start playing
        </button>
      </div>

      <button className="mb-2 w-100 py-1 mt-2 flex justify-center items-center">
        <DefaultImage src="/logout.png" height={30} width={30} />
        <span className="ml-[3px]">Log In</span>
      </button>
    </div>
  );
};
export default MovieDetailNav;

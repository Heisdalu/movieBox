import { FC } from "react";
import Image from "next/image";
import Svg from "./Svg";
import DefaultImage from "../Default/DefaultImage";

const Card: FC = () => {
  return (
    <article
      className="border-1 border-black max-w-[250px]"
      data-testid="movie-card"
    >
      <div className="relative border-1 border-red-600 flex">
        <Image
          src="/mainPic.png"
          height={370}
          width={250}
          alt=""
          data-testid="movie-poster"
        />
        <span className="bg-[#f3f4f680] [backdrop-filter:blur(1px)] p-0.5 rounded-50 absolute top-[1rem] right-[1rem]">
          <Svg />
        </span>
      </div>
      <div className="space-y-0.75 pt-[12px]">
        <span
          className="text-gray font-bold text-12"
          aria-label="release date"
          data-testid="movie-release-date"
        >
          2018
        </span>
        <h1 className="text-18 font-bold text-spb">Stranger Things</h1>
        <div className="flex items-center">
          <DefaultImage src="/imdb.jpg" height={35} width={35} />
          <div className="text-12 text-spb ml-[10px]">86.0/100</div>

          <div className="space-x-[10px] flex ml-auto items-center">
            <DefaultImage
              src="/orange.png"
              height={17}
              width={17}
              className="rounded-50"
            />
            <span aria-label="rating" className="text-spb text-12">
              97%
            </span>
          </div>
        </div>
        <p className="text-12 text-gray" aria-label="genre">
          Action, Adventure, Horror
        </p>
      </div>
    </article>
  );
};
export default Card;

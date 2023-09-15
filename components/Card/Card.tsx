import { FC } from "react";
import Image from "next/image";
import Svg from "./Svg";
import DefaultImage from "../Default/DefaultImage";
import { CardProps } from "@/types/interface";
import Link from "next/link";

// interface CardProps {
//   date: string;
//   title: string;
//   rating: number;
//   image: string;
// }

const Card: FC<CardProps> = ({
  release_date,
  title,
  poster_path,
  vote_average,
  id,
}) => {
  return (
    <article className="max-w-[250px]" data-testid="movie-card">
      <Link href={`/movies/${id}`}>
        <div className="relative flex">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            height={370}
            width={250}
            alt=""
            className="bg-slate-200"
            data-testid="movie-poster"
          />
          <span className="bg-[#ffffff88] [backdrop-filter:blur(2px)] p-0.5 rounded-50 absolute top-[1rem] right-[1rem]">
            <Svg />
          </span>
        </div>
        <div className="space-y-0.75 pt-[12px]">
          <span
            className="text-gray font-bold text-12"
            aria-label="release date"
            data-testid="movie-release-date"
          >
            {release_date}
          </span>
          <h1 className="text-18 font-bold text-spb" data-testid="movie-title">
            {title}
          </h1>
          <div className="flex items-center">
            <DefaultImage src="/imdb.jpg" height={35} width={35} />
            <div className="text-12 text-spb ml-[10px]">{vote_average}/10</div>

            <div className="space-x-[10px] flex ml-auto items-center">
              <DefaultImage
                src="/orange.png"
                height={17}
                width={17}
                className="rounded-50"
              />
              <span aria-label="rating" className="text-spb text-12">
                {vote_average * 10}%
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
export default Card;

import React, { FC, useEffect, useRef } from "react";
import Image from "next/image";
import DefaultImage from "../Default/DefaultImage";

interface Props {
  image: any;
}

const MovieMainDetail: FC<Props> = ({ image }: any) => {
  
  return (
    <>
      <div className="h-[300px] max-w-[700px] lg:max-w-[1000px] rounded-[20px] relative md:h-[500px] lg:h-[400px]  overflow-hidden">
        <div className=" w-100 h-100 overlay">
          <Image
            src={`https://image.tmdb.org/t/p/w500${image.poster_path}`}
            height={0}
            priority={true}
            width={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-[20px]"
            alt=""
          />
        </div>
        <span className="[backdrop-filter:blur(2px)] p-1 rounded-full bg-[#ffffff88] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <DefaultImage src="/playIcon.png" height={54} width={54} />
        </span>
      </div>
    </>
  );
};
export default MovieMainDetail;

import React from "react";
import Image from "next/image";
import Genre from "./Genre";


const MovieHeaderDetail = ({ data }: any) => {
  return (
    <div>
      <div
        aria-label="movie detail"
        className="font-[500] mb-1 space-y-1 md:space-y-[0] md:flex md:space-x-1"
      >
        <h1 className="break-all border-black text-1 md:text-[1.25rem]">
          {data.title}
        </h1>
        <p aria-label="release date" className="text-1 md:text-[1.25rem]">
          {data.release_date}
        </p>
        <div className="flex items-center text-1 md:text-[1.25rem]">
          <p aria-label="movie runtime">{data.runtime}</p>
          <span>mins</span>
        </div>
      </div>
      <div className="lg:flex space-y-1 lg:space-x-2 lg:space-y-[0]">
        <div className="space-y-1">
          <p className="text-1 md:text-[1.25rem]">{data.overview}</p>

          <div className="space-y-1 md:space-y-1.5">
            <div className="text-1 md:text-[20px]">
              <span className="text-[#333]">Status:</span>
              <span className="ml-[5px] text-rose">{data.status}</span>
            </div>
            <div className="text-1 md:text-[20px]">
              <span className="text-[#333]">Website:</span>
              <span className="text-rose ml-[5px] break-all">
                <a href={data.homepage} target="_blank">
                  {data.homepage}
                </a>
              </span>
            </div>
            <Genre data={data.genres} />
          </div>
          <div className="flex flex-col rounded-[10px] md:border-1 space-y-1 md:space-y-[0] md:flex-row md:items-center md:border-[#C7C7C7]">
            <span className="max-w-[200px] border-1 border-rose bg-rose px-1 py-0.5 rounded-[10px] text-white">
              Top rated movie #65
            </span>
            <span className="md:ml-[2rem] block">Awards 9 nominations</span>
          </div>
        </div>
        <aside className="flex flex-col space-y-1 max-w-[400px] mx-auto">
          <button className="rounded-[10px] bg-rose text-white text-1 md:text-[20px] p-0.5">
            See Showtimes
          </button>
          <button className="rounded-[10px] p-0.5 bg-[#be123c1a] border-1 border-rose">
            More watch options
          </button>
          <div className="mx-auto w-[200px] h-[370px]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              height={370}
              priority={true}
              width={200}
              //   sizes="100vw"
              //   style={{ width: "100%", height: "auto" }}
              className="rounded-[20px]"
              alt=""
            />
          </div>
        </aside>
      </div>
    </div>
  );
};
export default MovieHeaderDetail;

import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import MovieDetailNav from "@/components/MovieDetail/MovieDetailNav";
import Genre from "@/components/MovieDetail/Genre";
import MovieMainDetail from "@/components/MovieDetail/MovieMainDetail";
import Link from "next/link";

const MovieDetailPage = () => {
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2M1ZmY3MWFhN2VjZjM5NGYzOGUzZmY3OGM2ZjczOSIsInN1YiI6IjY0ZmZhMTdhZDdkY2QyMDBmZmViMTNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5J-vCNqvTcDOR-mawpln2vz7opQjfc40LfKta6Q6Stg",
      },
    };

    const lol = async () => {
      const result = await axios(
        "https://api.themoviedb.org/3/movie/235?api_key=aa00e3d2a883067d5c64c3b57d3d99f7&language=en-US"
      );
      console.log(result.data);
    };

    // lol();
  }, []);

  return (
    <div className="lg:flex lg:space-x-[3rem]">
      <MovieDetailNav />

      {/* home bar  */}
      <div className="p-1 space-y-1.5 mt-1 lg:max-w-[1000px] ">
        <Link
          href="/"
          className="lg:hidden text-white font-bold bg-rose px-2 py-0.5 rounded-6"
        >
          Go back
        </Link>

        <div className="container space-y-1">
          <MovieMainDetail />

          <div>
            <div
              aria-label="movie detail"
              className="mb-1 space-y-1 md:space-y-[0] md:flex md:space-x-1"
            >
              <h1 className="break-all border-black text-1 md:text-[1.25rem]">
                Top Gun: Maverick
              </h1>
              <p aria-label="release date" className="text-1 md:text-[1.25rem]">
                2022
              </p>
              <div className="flex items-center text-1 md:text-[1.25rem]">
                <p aria-label="movie runtime">187</p>
                <span>mins</span>
              </div>
            </div>
            <div className="lg:flex space-y-1 lg:space-x-2 lg:space-y-[0]">
              <div className="space-y-1">
                <p className="text-1 md:text-[1.25rem]">
                  {`After thirty years, Maverick is still pushing the envelope as a
                top naval aviator, but must confront ghosts of his past when he
                leads TOP GUN's elite graduates on a mission that demands the
                ultimate sacrifice from those chosen to fly it.`}
                </p>

                <div className="space-y-1 md:space-y-1.5">
                  <div className="text-1 md:text-[20px]">
                    <span className="text-[#333]">Status:</span>
                    <span className="ml-[5px] text-rose">Released</span>
                  </div>
                  <div className="text-1 md:text-[20px]">
                    <span className="text-[#333]">Revenue:</span>
                    <span className="text-rose ml-[5px]">$324000</span>
                  </div>
                  <Genre />
                </div>
                <div className="flex flex-col rounded-[10px] md:border-1 space-y-1 md:space-y-[0] md:flex-row md:items-center md:border-[#C7C7C7]">
                  <span className="max-w-[200px] border-1 border-rose bg-rose px-1 py-0.5 rounded-[10px] text-white">
                    Top rated movie #65
                  </span>
                  <span className="md:ml-[2rem] block">
                    Awards 9 nominations
                  </span>
                </div>
              </div>
              <aside className="flex flex-col space-y-1 max-w-[400px] mx-auto">
                <button className="rounded-[10px] bg-rose text-white text-1 md:text-[20px] p-0.5">
                  See Showtimes
                </button>
                <button className="rounded-[10px] p-0.5 bg-[#be123c1a] border-1 border-rose">
                  More watch options
                </button>
                <div className="mx-auto w-[200px] h-[200px]">
                  <Image
                    src={
                      "https://image.tmdb.org/t/p/w500/yjGllQUm28R4X9xD9T5xMszirgw.jpg"
                    }
                    height={0}
                    priority={true}
                    width={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-[20px]"
                    alt=""
                  />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailPage;

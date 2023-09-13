import { DM_Sans } from "next/font/google";
import DefaultImage from "@/components/Default/DefaultImage";
import Wrapper from "@/components/Wrapper/Wrapper";
import MovieList from "@/components/MovieList/MovieList";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import axios from "axios";
import React, { useRef, useEffect } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.NEXT_TDMB,
  },
};

export const getStaticProps = async () => {
  try {
    const topRatedMovies = await axios(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    );

    return {
      props: {
        data: topRatedMovies.data.results.slice(0, 20),
      },
    };
  } catch (e) {
    return {
      props: {
        data: {
          error: "Something went wrong",
        },
      },
    };
  }
};

export default function Home({ data }: any) {
  const headerRef = useRef<HTMLDivElement | null>(null);

  if (data.error) {
    return <div className="h-[500px]">{data.error}</div>;
  }

  const firstMovie = data[1];

  useEffect(() => {
    const bgImage = `url(https://image.tmdb.org/t/p/w500${firstMovie.backdrop_path})`;

    if (headerRef.current) {
      headerRef.current.style.backgroundImage = bgImage;
    }
  }, []);

  return (
    <div className={dmSans.className}>
      <header
        ref={headerRef}
        className="relative z-[5] overlay bg-[#00000053] bg-no-repeat bg-cover bg-center h-[600px]  md:py-[1rem]"
      >
        <Wrapper>
          <Header />
          <div className="space-y-1 max-w-[404px] w-100 mt-[4rem] md:mt-[7rem] ">
            <h1 className="text-[3rem] font-bold text-white">
              {firstMovie.name}
            </h1>
            <div className="flex items-center">
              <DefaultImage src="/imdb.jpg" height={35} width={35} />
              <div className="text-12 text-white ml-[10px]">
                {firstMovie.vote_average}/10
              </div>

              <div className="space-x-[10px] flex ml-2 items-center">
                <DefaultImage
                  src="/orange.png"
                  height={17}
                  width={17}
                  className="rounded-50"
                />
                <span aria-label="rating" className="text-white text-12">
                  {firstMovie.vote_average * 10}%
                </span>
              </div>
            </div>
            <p className="text-14 text-white leading-[1.125rem] font-[500]">
              {firstMovie.overview}
            </p>

            <button className="space-x-[10px] flex items-center uppercase bg-rose text-white rounded-6 px-1.5 py-1">
              <DefaultImage src="/watch.svg" height={20} width={20} />
              <span className="text-14 font-[700]"> Watch trailer</span>
            </button>
          </div>
        </Wrapper>
      </header>

      <section className="bg-white py-1 md:py-[3rem]">
        <Wrapper>
          <div className="flex items-center">
            <h1 className="text-black text-[1.5rem] md:text-36">
              Featured Movie
            </h1>
            <button className="ml-auto text-18 text-rose">
              See more {">"}
            </button>
          </div>

          <MovieList moveList={data.slice(1)} />
          <Footer />
        </Wrapper>
      </section>
    </div>
  );
}

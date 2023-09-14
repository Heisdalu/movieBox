import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieDetailNav from "@/components/MovieDetail/MovieDetailNav";
import Genre from "@/components/MovieDetail/Genre";
import MovieMainDetail from "@/components/MovieDetail/MovieMainDetail";
import Link from "next/link";
import DetailLoading from "@/components/Loading/DetailLoading";
import MovieHeaderDetail from "@/components/MovieDetail/MovieHeaderDetail";
import { useRouter } from "next/router";
import ErrorPage from "@/components/ErrorPage/ErrorPage";

const MovieDetailPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [detail, setDetail] = useState("");
  const { query } = useRouter();

  useEffect(() => {
    if (!query.id) return;
    const getMovieInformation = async () => {
      setLoading(true);
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: process.env.NEXT_TDMB,
          },
        };
        const result = await axios(
          `https://api.themoviedb.org/3/movie/${query.id}?language=en-US`,
          options
        );
        setDetail(result.data);
        setError(false);
      } catch (e: any) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getMovieInformation();
  }, [query]);

  if (error) return <ErrorPage />;

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

        {/* {<DetailLoading />} */}
        {!loading && !error ? (
          <div className="container space-y-1">
            <MovieMainDetail image={detail} />
            <MovieHeaderDetail data={detail} />
          </div>
        ) : (
          <DetailLoading />
        )}
      </div>
    </div>
  );
};
export default MovieDetailPage;

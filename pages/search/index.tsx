import Header from "@/components/Header/Header";
import LoadingList from "@/components/Loading/LoadingList";
import MovieList from "@/components/MovieList/MovieList";
// import MovieList from "@/components/MovieList/MovieList";
import Wrapper from "@/components/Wrapper/Wrapper";
import React, { FC, useEffect, useState } from "react";
import ErrorPage from "@/components/ErrorPage/ErrorPage";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import { options } from "@/constant/option";
// import

const Search: FC = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (!query.title) return;
    const searchMovies = async () => {
      try {
        const result: any = await axios(
          `https://api.themoviedb.org/3/search/movie?query=${query.title}&include_adult=false&language=en-US&page=1`,
          options
        );

        setError(false);
        setData(result.data);
      } catch (e: any) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    searchMovies();
  }, [query.title]);

  if (error) return <ErrorPage />;

  return (
    <div>
      <div className="bg-spb md:pt-1">
        <Wrapper>
          <Header />
        </Wrapper>
      </div>
      <Wrapper>
        <div className="mt-2">
          {loading && <LoadingList />}
          {!loading && !error && data?.results?.length > 0 ? (
            <MovieList moveList={data.results.slice(0, 11)} />
          ) : (
            <div className="h-[300px] text-center text-18 font-bold">
              Oops...No results found
            </div>
          )}
        </div>
        <Footer />
      </Wrapper>
    </div>
  );
};
export default Search;

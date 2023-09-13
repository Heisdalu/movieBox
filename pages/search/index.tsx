import Header from "@/components/Header/Header";
import LoadingList from "@/components/Loading/LoadingList";
import MovieList from "@/components/MovieList/MovieList";
// import MovieList from "@/components/MovieList/MovieList";
import Wrapper from "@/components/Wrapper/Wrapper";
import React, { FC, useEffect } from "react";
import ErrorPage from "@/components/ErrorPage/ErrorPage";
import Footer from "@/components/Footer/Footer";

const Search: FC = () => {
  useEffect(() => {
    console.log("sjjsjsjsjsjs");
  }, []);


  return (
    <div>
      <div className="bg-spb md:pt-1">
        <Wrapper>
          <Header />
        </Wrapper>
      </div>
      <Wrapper>
        <div className="mt-2">
          <LoadingList />
          {/* <MovieList /> */}
        </div>
        <Footer />
      </Wrapper>
    </div>
  );
};
export default Search;

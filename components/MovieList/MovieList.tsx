import Image from "next/image";
import { FC } from "react";
import Card from "../Card/Card";

const Svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
        fill="#D1D5DB"
      />
    </svg>
  );
};

const MovieList: FC = () => {
  return (
    <div className="py-2 space-y-[3rem] border-1 border-[#000] flex flex-col items-center md:grid  md:grid-cols-2 lg:grid-cols-3 vlg:grid-cols-4 md:items-start md:space-y-[0] md:[grid-gap:5rem]">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export default MovieList;

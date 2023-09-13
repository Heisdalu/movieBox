import Image from "next/image";
import { FC } from "react";
import Card from "../Card/Card";
import { CardProps } from "@/types/interface";

interface MoveListProps {
  moveList: CardProps[];
}

const MovieList: FC<MoveListProps> = ({ moveList }) => {

  return (
    <div className="py-2 space-y-[3rem] border-1 border-[#000] flex flex-col items-center md:grid  md:grid-cols-2 lg:grid-cols-3 vlg:grid-cols-4 md:items-start md:space-y-[0] md:[grid-gap:5rem]">
      {moveList.slice(1, 11).map((el, i) => (
        <Card
          key={el.id}
          id={el.id}
          first_air_date={el.first_air_date}
          name={el.name}
          poster_path={el.poster_path}
          vote_average={el.vote_average}
        />
      ))}
    </div>
  );
};
export default MovieList;

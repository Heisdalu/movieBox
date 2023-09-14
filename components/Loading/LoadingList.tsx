import React, { FC } from "react";
import CardLoading from "./CardLoading";
import Card from "../Card/Card";

const LoadingList: FC = () => {
  return (
    <div className="py-2 space-y-[3rem] flex flex-col items-center md:grid  md:grid-cols-2 lg:grid-cols-3 vlg:grid-cols-4 md:items-start md:space-y-[0] md:[grid-gap:5rem]">
      <CardLoading />
      <CardLoading />
      <CardLoading />
      <CardLoading />
      <CardLoading />
      <CardLoading />
    </div>
  );
};
export default LoadingList;

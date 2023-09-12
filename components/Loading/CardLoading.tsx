import React, { FC } from "react";

const CardLoading: FC = () => {
  return (
    <div className="w-[250px]">
      <div className="animate-pulse bg-slate-200 h-[370px] w-100"></div>
      <div className="mt-1 space-y-1">
        <div className="h-[5px] w-[70px] bg-slate-200 animate-pulse"></div>
        <div className="h-[20px] w-[150px] bg-slate-200 animate-pulse"></div>
        <div className="h-[10px] w-[100px] bg-slate-200 animate-pulse"></div>
      </div>
    </div>
  );
};
export default CardLoading;

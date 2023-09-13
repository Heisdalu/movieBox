import React, { FC } from "react";

interface GenreProps {
  data: { name: string }[];
}

const Genre = () => {
  return (
    <div className="flex items-center space-x-[5px] text-1 md:text-[20px]">
      <span className="text-[#333]">Genre:</span>
      <div className="flex space-x-1 gap-y-[0.5] flex-wrap">
        <span className="border-1 border-[#F8E7EB] px-[0.8rem] py-[1px] rounded-[16px]">
          Gee
        </span>
        <span className="border-1 border-[#F8E7EB] px-[0.8rem] py-[1px] rounded-[16px]">
          Gee
        </span>
        <span className="border-1 border-[#F8E7EB] px-[0.8rem] py-[1px] rounded-[16px]">
          Gee
        </span>
      </div>
    </div>
  );
};
export default Genre;

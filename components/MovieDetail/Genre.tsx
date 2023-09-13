import React, { FC } from "react";

interface GenreProps {
  data: { name: string }[];
}

const Genre: FC<GenreProps> = ({ data }) => {
  const genresInfo = data?.map((el) => el.name);

  return (
    <div className="flex items-center space-x-[5px] text-1 md:text-[20px]">
      <span className="text-[#333]">Genre:</span>
      <div className="flex space-x-1 gap-y-[0.5rem] flex-wrap">
        {genresInfo?.length > 0
          ? genresInfo.map((el) => (
              <span
                key={el}
                className="border-1 border-[#F8E7EB] px-[0.8rem] py-[1px] rounded-[16px]"
              >
                {el}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};
export default Genre;

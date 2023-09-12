import React, { FC } from "react";
import Image from "next/image";

interface DefaultImageProps {
  src: string;
  width: number;
  height: number;
  className?: string;
}

const DefaultImage: FC<DefaultImageProps> = ({
  src,
  width,
  height,
  className,
}) => {
  return (
    <Image
      src={src}
      height={height}
      width={width}
      alt=""
      priority={true}
      className={className}
    />
  );
};
export default DefaultImage;

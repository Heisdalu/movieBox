import { FC, ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className="p-0.5 md:px-[3rem] vlg:px-[4rem]">{children}</div>;
};
export default Wrapper;

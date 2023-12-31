import DefaultImage from "../Default/DefaultImage";
import Search from "./Search";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="relative space-y-1 md:grid md:[grid-template-columns:1fr_1fr_1fr] md:items-center md:space-y-[0]">
      <Link href="/" className="flex items-center md:justify-self-start">
        <DefaultImage
          src="/tv.png"
          className="bg-transparent"
          height={50}
          width={50}
        />
        <h1 aria-label="app title" className="font-bold text-white ml-[1rem]">
          MovieBox
        </h1>
        <div className=" bg-rose rounded-50 p-0.5 ml-auto md:hidden">
          <DefaultImage src="/burger.svg" height={24} width={24} />
        </div>
      </Link>
      <Search />
      <div className="hidden md:flex md:items-center md:justify-self-end space-x-1  ">
        <span className="text-white">Sign In</span>
        <div className=" bg-rose rounded-50 p-0.5">
          <DefaultImage src="/burger.svg" height={24} width={24} />
        </div>
      </div>
    </nav>
  );
};
export default Header;

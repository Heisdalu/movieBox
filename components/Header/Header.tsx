import DefaultImage from "../Default/DefaultImage";
import Search from "./Search";

const Header = () => {
 
  return (
    <nav className="relative space-y-1 border-[2px] border-red-700 md:grid md:[grid-template-columns:1fr_1fr_1fr] md:items-center md:space-y-[0]">
      <div className="flex items-center border-1 md:justify-self-start">
        <DefaultImage
          src="/tvIcon.jpg"
          className="bg-transparent rounded-[50%]"
          height={50}
          width={50}
        />
        <h1 aria-label="app title" className="font-bold text-white ml-[1rem]">
          MovieBox
        </h1>
        <div className=" bg-rose rounded-50 p-0.5 ml-auto md:hidden">
          <DefaultImage src="/burger.svg" height={24} width={24} />
        </div>
      </div>
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

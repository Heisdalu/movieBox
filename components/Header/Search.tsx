import { useRouter } from "next/router";
import DefaultImage from "../Default/DefaultImage";
import { ChangeEventHandler } from "react";

const Search = () => {
  const router = useRouter();
  console.log(router);

  // debounce search function
  let timeout: ReturnType<typeof setTimeout>;
  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e);
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        if(router.pathname !== 'search') router.push('/search')
      console.log("heaven");
    }, 1000);
  };

  return (
    <div className="px-0.5 rounded-6 border-[2px] border-[#D1D5DB] flex max-w-[525px] w-100 ">
      <input
        type="search"
        onChange={changeHandler}
        placeholder="What do you want to watch?"
        className="relative placeholder:text-1 placeholder:text-white font-[400] text-1  w-100 text-white p-0.5 py-1 md:py-0.5 appearance-none bg-transparent outline-none gee"
      />
      <DefaultImage src="/search.svg" height={24} width={24} />
    </div>
  );
};

export default Search;

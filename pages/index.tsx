import { DM_Sans } from "next/font/google";
import DefaultImage from "@/components/Default/DefaultImage";
import Wrapper from "@/components/Wrapper/Wrapper";
import MovieList from "@/components/MovieList/MovieList";
import Footer from "@/components/Footer/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default function Home() {
  return (
    <div className={dmSans.className}>
      <header className="bg-hero-image bg-no-repeat bg-cover bg-center h-[600px]  md:py-[1rem]">
        <Wrapper>
          <nav className="relative space-y-1 border-[2px] border-red-700 md:grid md:[grid-template-columns:1fr_1fr_1fr] md:items-center md:space-y-[0]">
            <div className="flex items-center border-1 md:justify-self-start">
              <DefaultImage
                src="/tvIcon.jpg"
                className="bg-transparent rounded-[50%]"
                height={50}
                width={50}
              />
              <h1
                aria-label="app title"
                className="font-bold text-white ml-[1rem]"
              >
                MovieBox
              </h1>
              <div className=" bg-rose rounded-50 p-0.5 ml-auto md:hidden">
                <DefaultImage src="/burger.svg" height={24} width={24} />
              </div>
            </div>
            <div className="px-0.5 rounded-6 border-[2px] border-[#D1D5DB] flex max-w-[525px] w-100 ">
              <input
                type="search"
                placeholder="What do you want to watch?"
                className="relative placeholder:text-1 placeholder:text-white font-[400] text-1  w-100 text-white p-0.5 py-1 md:py-0.5 appearance-none bg-transparent outline-none gee"
              />
              <DefaultImage src="/search.svg" height={24} width={24} />
            </div>
            <div className="hidden md:flex md:items-center md:justify-self-end space-x-1  ">
              <span className="text-white">Sign In</span>
              <div className=" bg-rose rounded-50 p-0.5">
                <DefaultImage src="/burger.svg" height={24} width={24} />
              </div>
            </div>
          </nav>

          <div className="space-y-1 max-w-[404px] w-100 border-1 border-red-500 mt-[4rem] md:mt-[7rem] ">
            <h1 className="text-[3rem] font-bold text-white">
              John wick 3: Parabellum
            </h1>
            <div className="flex items-center">
              <DefaultImage src="/imdb.jpg" height={35} width={35} />
              <div className="text-12 text-white ml-[10px]">86.0/100</div>

              <div className="space-x-[10px] flex ml-2 items-center">
                <DefaultImage
                  src="/orange.png"
                  height={17}
                  width={17}
                  className="rounded-50"
                />
                <span aria-label="rating" className="text-white text-12">
                  97%
                </span>
              </div>
            </div>
            <p className="text-14 text-white leading-[1.125rem] font-[500]">
              John Wick is on the run after killing a member of the
              international assassins guild, and with a $14 million price tag on
              his head, he is the target of hit men and women everywhere.
            </p>

            <button className="space-x-[10px] flex items-center uppercase bg-rose text-white rounded-6 px-1.5 py-1">
              <DefaultImage src="/watch.svg" height={20} width={20} />
              <span className="text-14 font-[700]"> Watch trailer</span>
            </button>
          </div>
        </Wrapper>
      </header>

      <section className="bg-white py-1 md:py-[3rem]">
        <Wrapper>
          <div className="flex items-center">
            <h1 className="text-black text-[1.5rem] md:text-36">
              Featured Movie
            </h1>
            <button className="ml-auto text-18 text-rose">
              See more {">"}
            </button>
          </div>

          <MovieList />
          <Footer />
        </Wrapper>
      </section>
    </div>
  );
}

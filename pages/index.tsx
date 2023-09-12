import { DM_Sans } from "next/font/google";
import DefaultImage from "@/components/Default/DefaultImage";
import Wrapper from "@/components/Wrapper/Wrapper";
import MovieList from "@/components/MovieList/MovieList";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

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
          <Header />
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

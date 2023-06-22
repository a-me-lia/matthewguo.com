import AboutMe from './components/AboutMe';
import Blog from './components/blog';
import Footer from './components/footer';
import GlowButton from './components/glowbutton';
import HeadlineDesktop from './components/headlineDesktop';
import HeadlineMobile from './components/headlineMobile';
import HeroGraphic from './components/heroGraphic';
import Navbar from './components/navbar';
import News from './components/news';

export default function Home() {
  return (
    <main>
      <div className="mx-auto min-h-screen font-sans">
        <div className="flex min-h-screen flex-col bg-primary text-white">
          <Navbar pageTitle="home" className="" />

          <div className="absolute right-0 top-64 h-[270px] w-[326px] opacity-50 md:top-32 md:h-[500px] md:w-[600px] md:opacity-25 lg:opacity-50 xl:right-24">
            <HeroGraphic></HeroGraphic>
          </div>

          <div className="ml-6 mt-8  space-y-4 md:mt-32 lg:ml-36">
            <div className="hidden md:block">
              <HeadlineDesktop
                className="font-space"
                text="Feng shui app, Simmons, secures 2M Series-A funding round →"
                href="#"
              />
            </div>

            <div className=" md:hidden">
              <HeadlineMobile
                className="font-space"
                text="Feng shui app, Simmons, secures 2M Series-A funding round →"
                href="#"
              />
            </div>

            <h1 className="relative z-10 hidden pb-4 font-space text-[64px] font-bold md:block">
              Designer, Developer, <br /> Pianist
            </h1>
            <h1 className="relative z-10 pb-4 font-space text-[40px] md:hidden">
              Designer, <br /> Developer, <br />
              Pianist
            </h1>
            <GlowButton href="#" text="Hire me now" />
          </div>

          <div className="mt-36 h-min rounded-t-[80px] bg-gradient-to-b from-darkbg via-darkbg via-60% to-transparent drop-shadow-[0_-200px_200px_rgba(255,255,255,0.04)] md:mt-48 lg:rounded-t-[160px]">
            <div className="mx-6 mt-8 flex flex-col lg:mx-12 xl:mx-36">
              <AboutMe></AboutMe>

              <div className="mb-8 mt-16 h-[10px] w-full rounded-full bg-gradient-to-b from-transparent via-lightaccent to-transparent md:mt-32"></div>
            </div>
          </div>

          <div className="mx-6 xl:mx-36">
            <h1 className="z-10 font-space text-[24px] font-bold md:pt-6 md:text-[64px]">
              Latest News
            </h1>
            <p className=" mt-2 capitalize hover:underline">
              go to latest posts &gt;
            </p>

            <News></News>

            <div className="mb-8 mt-16 h-[10px] w-full rounded-full bg-gradient-to-b from-transparent via-lightaccent to-transparent md:mt-32"></div>
            <h1 className="z-10 py-6 font-space text-[24px] font-bold md:text-[64px]">
              Blog
            </h1>

            <Blog></Blog>
          </div>

          <Footer></Footer>
        </div>
      </div>
    </main>
  );
}

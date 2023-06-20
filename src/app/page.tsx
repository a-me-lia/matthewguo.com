import Image from 'next/image';
import Link from 'next/link';

import Arrow from './components/→';
import Button from './components/Button';
import Footer from './components/footer';
import GlowButton from './components/glowbutton';
import HeadlineDesktop from './components/headlineDesktop';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <main>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body className=" mx-auto min-h-screen">
        <div className="flex min-h-screen flex-col bg-primary text-white">
          <Navbar pageTitle="home" className="" />

          <div className="ml-10 mt-20 space-y-4 lg:ml-36">
            <div className="hidden md:block">
              <HeadlineDesktop
                className="font-space"
                text="Feng shui app, Simmons, secures 2M Series-A funding round →"
              />
              {/* should add HeadlineMobile later */}
            </div>
            <h1 className="hidden pb-4  font-space text-[64px] font-bold md:block">
              Designer, Developer, <br />
              Pianist
            </h1>
            <h1 className="pb-4 font-space text-[40px] md:hidden">
              Designer, <br /> Developer, <br />
              Pianist
            </h1>
            <GlowButton href="#" text="Hire me now" />
          </div>

          <div className="mt-24 h-min rounded-t-[80px] bg-gradient-to-b from-darkbg via-darkbg via-60% to-transparent drop-shadow-[0_-200px_200px_rgba(255,255,255,0.04)] lg:rounded-t-[160px]">
            <div className="mx-6 mt-8 flex flex-col lg:mx-36">
              <div className="flex flex-row items-center">
                <div className="ml-[-32px] hidden lg:block">
                  <div className="relative h-[51px] w-[45px] md:h-[110px] md:w-[96px]">
                    <Image
                      className="z-0 object-cover lg:block"
                      src="/public/slash.png"
                      alt="a slash image for the logo"
                      fill
                    />
                  </div>
                </div>

                <h1 className="z-10 pt-6 font-space text-[24px] font-bold md:text-[64px] lg:ml-[-60px]">
                  About Me
                </h1>
              </div>

              <div className="mt-8 flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-32">
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <p>
                    Marin Kitagawa is an above-average height girl with a slim
                    waistline and light skin tone. Her eyes are naturally a dark
                    brown, though she is almost always seen with dark pink color
                    contacts when she isn`&apos`t cosplaying. She has very big
                    boobs.
                  </p>
                  <Button href="#" text="Read My Story"></Button>{' '}
                  {/* how would i push this button down to align with the bototm like on the figma */}
                </div>

                <div className="mt-8 flex flex-col md:w-1/2">
                  <Link
                    href="projects"
                    className=" flex w-full flex-row border-b-2 py-3 hover:block"
                  >
                    <p className="w-full md:text-[36px]">Web/App Design </p>
                    <div className="md:hidden">
                      <Arrow w="25" h="22"></Arrow>
                    </div>{' '}
                    {/* kinda fucked ngl */}
                    <div className="hidden ">
                      <Arrow w="53" h="46"></Arrow>
                    </div>
                  </Link>
                  <Link
                    href="projects"
                    className=" flex w-full flex-row border-b-2 py-3 hover:block"
                  >
                    <p className="w-full md:text-[36px]">Electronics </p>
                    <div className="md:hidden">
                      <Arrow w="25" h="22"></Arrow>
                    </div>
                    <div className="hidden ">
                      <Arrow w="53" h="46"></Arrow>
                    </div>
                  </Link>
                  <Link
                    href="piano+music"
                    className=" flex w-full flex-row border-b-2 py-3 hover:block"
                  >
                    <p className="w-full md:text-[36px]">Piano and Music </p>
                    <div className="md:hidden">
                      <Arrow w="25" h="22"></Arrow>
                    </div>
                    <div className="hidden ">
                      <Arrow w="53" h="46"></Arrow>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mb-8 mt-16 h-[10px] w-full rounded-full bg-gradient-to-b from-transparent via-lightaccent to-transparent md:mt-32"></div>
            </div>
          </div>

          <div className="mx-6 lg:mx-36">
            <h1 className="z-10 pt-6 font-space text-[24px] font-bold md:text-[64px]">
              Latest News
            </h1>

            <div className="mb-8 mt-16 h-[10px] w-full rounded-full bg-gradient-to-b from-transparent via-lightaccent to-transparent md:mt-32"></div>
            <h1 className="z-10 py-6 font-space text-[24px] font-bold md:text-[64px]">
              Blog
            </h1>

            <ul className="items-center space-y-6 text-[16px] capitalize lg:space-y-4 lg:text-[24px]">
              <li className="flex flex-col lg:flex-row ">
                <p className="w-1/3 font-space font-bold">2023.06.69</p>
                <Link href="#" className="w-2/3">
                  i have a website now!
                </Link>
              </li>

              <li className="flex flex-col lg:flex-row ">
                <p className="w-1/3 font-space font-bold">2023.06.69</p>
                <Link href="#" className="w-2/3">
                  interview with emiliano garcia-lopez: on feng shui and ella
                  simmons
                </Link>
              </li>

              <li className="flex flex-col lg:flex-row">
                <p className="w-1/3 font-space font-bold">2023.06.69</p>
                <Link href="#" className="w-2/3">
                  i have a website now!
                </Link>
              </li>

              <li className="flex flex-col lg:flex-row ">
                <p className="w-1/3 font-space font-bold">2023.06.69</p>
                <Link href="#" className="w-2/3">
                  interview with emiliano garcia-lopez: on feng shui and ella
                  simmons
                </Link>
              </li>
            </ul>
          </div>

          <Footer></Footer>
        </div>
      </body>
    </main>
  );
}

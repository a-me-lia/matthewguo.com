import Image from 'next/image';
import Link from 'next/link';

import Arrow from './components/→';
import Button from './components/Button';
import Footer from './components/footer';
import GlowButton from './components/glowbutton';
import HeadlineDesktop from './components/headlineDesktop';
import HeadlineMobile from './components/headlineMobile';
import HeroGraphic from './components/heroGraphic';
import Navbar from './components/navbar';
import Slash from './components/slash';

export default function Home() {
  return (
    <main>
      <div className="mx-auto min-h-screen font-sans">
        <div className="flex min-h-screen flex-col bg-primary text-white">
          <Navbar pageTitle="home" className="" />

          <div className="absolute right-0 top-72 h-[270px] w-[326px] opacity-50 md:top-32 md:h-[500px] md:w-[600px] md:opacity-25 lg:opacity-50 xl:right-2">
            <HeroGraphic></HeroGraphic>
          </div>

          <div className="ml-6 mt-20 space-y-4 lg:ml-36">
            <div className="hidden md:block">
              <HeadlineDesktop
                className="font-space"
                text="Feng shui app, Simmons, secures 2M Series-A funding round →"
                href="#"
              />
              {/* should add HeadlineMobile later */}
            </div>

            <div className=" md:hidden">
              <HeadlineMobile
                className="font-space"
                text="Feng shui app, Simmons, secures 2M Series-A funding round →"
                href="#"
              />
              {/* should add HeadlineMobile later */}
            </div>

            <h1 className="relative z-10 hidden pb-4 font-space text-[64px] font-bold md:block">
              Designer, Developer, <br />
              Pianist
            </h1>
            <h1 className="relative z-10 pb-4 font-space text-[40px] md:hidden">
              Designer, <br /> Developer, <br />
              Pianist
            </h1>
            <GlowButton href="#" text="Hire me now" />
          </div>

          <div className="mt-36 h-min rounded-t-[80px] bg-gradient-to-b from-darkbg via-darkbg via-60% to-transparent drop-shadow-[0_-200px_200px_rgba(255,255,255,0.04)] md:mt-32 lg:rounded-t-[160px]">
            <div className="mx-6 mt-8 flex flex-col lg:mx-36">
              <div className="flex flex-row items-center">
                <div className="ml-[-32px] hidden lg:block">
                  <div className="relative">
                    <div className="md:hidden">
                      <Slash h="51" w="45"></Slash>
                    </div>
                    <div className="hidden md:block">
                      <Slash h="110" w="96"></Slash>
                    </div>
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
                    className="relative flex w-full flex-row border-b-2 py-3 "
                  >
                    <div>
                      <p className="w-full md:text-[36px]">Web/App Design </p>
                      <div className="absolute inset-0  hidden hover:block">
                        <div className="absolute  right-0 top-4">
                          <Arrow w="53" h="46"></Arrow>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="projects"
                    className="relative flex w-full flex-row border-b-2 py-3 "
                  >
                    <div>
                      <p className="w-full md:text-[36px]">Electronics </p>
                      <div className="absolute inset-0  hidden hover:block">
                        <div className="absolute  right-0 top-4">
                          <Arrow w="53" h="46"></Arrow>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="projects"
                    className="relative flex w-full flex-row border-b-2 py-3 "
                  >
                    <div>
                      <p className="w-full md:text-[36px]">Piano and Music </p>
                      <div className="absolute inset-0  hidden hover:block">
                        <div className="absolute  right-0 top-4">
                          <Arrow w="53" h="46"></Arrow>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="mb-8 mt-16 h-[10px] w-full rounded-full bg-gradient-to-b from-transparent via-lightaccent to-transparent md:mt-32"></div>
            </div>
          </div>

          <div className="mx-6 lg:mx-36">
            <h1 className="z-10 font-space text-[24px] font-bold md:pt-6 md:text-[64px]">
              Latest News
            </h1>

            <div className="relative h-fit w-fit rounded-[80px] bg-gradient-to-b from-black via-transparent  via-10%">
              <ul className=" mt-12 flex flex-row space-x-4 overflow-x-auto from-black via-transparent via-20% md:h-[400px] md:w-full md:flex-col md:space-x-0 md:space-y-10 md:rounded-[80px] md:border-y-4 md:bg-gradient-to-t">
                <li className="relative h-[500px] w-[300px]  shrink-0 border-b-2 border-white bg-gradient-to-b from-darkAccent  md:mt-20 md:h-[240px] md:w-full md:rounded-[20px] md:border-none md:bg-gradient-to-l md:from-[#2E0067B0] md:via-[#2E006740] md:via-80% ">
                  <div className="flex flex-col md:flex-row-reverse md:p-[10px]">
                    <div className="relative h-[200px] w-full shrink-0 md:h-[220px] md:w-[380px]">
                      <Image
                        alt=""
                        src="/siemens.png"
                        className="object-cover  md:rounded-[20px]"
                        fill
                      ></Image>

                      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-[20px] bg-slate-700 bg-fixed opacity-0 transition ease-in-out hover:opacity-80">
                        {' '}
                        <div className="relative z-50 ml-[130px] mt-[73px]">
                          {' '}
                          <Arrow h="75" w="120"></Arrow>
                        </div>{' '}
                      </div>
                    </div>

                    <div className="flex w-full flex-col space-y-4 p-4 md:mx-8 md:space-y-2">
                      <h1 className="text-[18px]  uppercase">
                        web and app design
                      </h1>

                      <h1 className="capitalize">bing chilling website</h1>
                      <p className="xl:w-2/3">
                        She is notably very kind, friendly, cheerful, and
                        outgoing. It is shown that Marin greatly dislikes
                        overly-critical people.
                      </p>
                      <Link
                        href="#"
                        className="absolute bottom-4 capitalize underline"
                      >
                        go to blog post{' '}
                      </Link>
                    </div>
                    <div className="hidden h-[100px] w-[8px] shrink-0 self-center rounded-full bg-lightaccent md:block"></div>
                  </div>
                </li>

                <li className="relative h-[500px]  w-[300px] shrink-0 border-b-2 border-white bg-gradient-to-b  from-darkAccent md:h-[240px] md:w-full md:rounded-[20px] md:border-none md:bg-gradient-to-l md:from-[#2E0067B0] md:via-[#2E006740] md:via-80% ">
                  <div className="flex flex-col md:flex-row-reverse  md:p-[10px]">
                    <div className="relative h-[200px] w-full shrink-0 md:h-[220px] md:w-[380px]">
                      <Image
                        alt="placeholder"
                        src="/siemens.png"
                        className="object-cover  md:rounded-[20px]"
                        fill
                      ></Image>

                      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-[20px] bg-slate-700 bg-fixed opacity-0 transition ease-in-out hover:opacity-80">
                        {' '}
                        <div className="relative z-50 ml-[130px] mt-[73px]">
                          {' '}
                          <Arrow h="75" w="120"></Arrow>
                        </div>{' '}
                      </div>
                    </div>

                    <div className="flex w-full flex-col space-y-4 p-4 md:mx-8 md:space-y-2">
                      <h1 className="text-[18px] uppercase">
                        web and app design
                      </h1>

                      <h1 className="capitalize ">bing chilling website</h1>
                      <p className="xl:w-2/3">
                        She is notably very kind, friendly, cheerful, and
                        outgoing. It is shown that Marin greatly dislikes
                        overly-critical people.
                      </p>
                      <Link
                        href="#"
                        className="absolute bottom-4 capitalize underline"
                      >
                        go to blog post{' '}
                      </Link>
                    </div>
                    <div className="hidden h-[100px] w-[8px] shrink-0 self-center rounded-full bg-lightaccent md:block"></div>
                  </div>
                </li>
                <li className=" relative h-[500px]  w-[300px] shrink-0 border-b-2 border-white bg-gradient-to-b  from-darkAccent md:h-[240px] md:w-full md:rounded-[20px] md:border-none md:bg-gradient-to-l md:from-[#2E0067B0] md:via-[#2E006740] md:via-80% ">
                  <div className="flex flex-col md:flex-row-reverse  md:p-[10px]">
                    <div className="relative h-[200px] w-full shrink-0 md:h-[220px] md:w-[380px]">
                      <Image
                        alt=""
                        src="/siemens.png"
                        className="object-cover  md:rounded-[20px]"
                        fill
                      ></Image>

                      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-[20px] bg-slate-700 bg-fixed opacity-0 transition ease-in-out hover:opacity-80">
                        {' '}
                        <div className="relative z-50 ml-[130px] mt-[73px]">
                          {' '}
                          <Arrow h="75" w="120"></Arrow>
                        </div>{' '}
                      </div>
                    </div>

                    <div className="flex w-full flex-col space-y-4 p-4 md:mx-8 md:space-y-2">
                      <h1 className="text-[18px]  uppercase">
                        web and app design
                      </h1>

                      <h1 className="capitalize ">bing chilling website</h1>
                      <p className="xl:w-2/3">
                        She is notably very kind, friendly, cheerful, and
                        outgoing. It is shown that Marin greatly dislikes
                        overly-critical people.
                      </p>
                      <Link
                        href="#"
                        className="absolute bottom-4 capitalize underline"
                      >
                        go to blog post
                      </Link>
                    </div>
                    <div className="hidden h-[100px] w-[8px] shrink-0 self-center rounded-full bg-lightaccent md:block"></div>
                  </div>
                </li>

                <li className="w-full py-12 ">
                  <h1 className=" hidden text-center md:block">uwu</h1>
                </li>
              </ul>
            </div>

            <div className="mb-8 mt-16 h-[10px] w-full rounded-full bg-gradient-to-b from-transparent via-lightaccent to-transparent md:mt-32"></div>
            <h1 className="z-10 py-6 font-space text-[24px] font-bold md:text-[64px]">
              Blog
            </h1>

            <ul className="items-center space-y-6 text-[16px] capitalize lg:space-y-4 lg:text-[24px]">
              <li className="flex flex-col lg:flex-row ">
                <p className="w-1/3 font-space font-bold">2023.06.69</p>
                <Link href="#" className="lg:w-2/3">
                  i have a website now!
                </Link>
              </li>

              <li className="flex flex-col lg:flex-row ">
                <p className="w-1/3 font-space font-bold">2023.06.69</p>
                <Link href="#" className="lg:w-2/3">
                  interview with emiliano garcia-lopez: on feng shui and ella
                  simmons
                </Link>
              </li>

              <li className="flex flex-col lg:flex-row">
                <p className="w-1/3 font-space font-bold">2023.06.69</p>
                <Link href="#" className="lg:w-2/3">
                  i have a website now!
                </Link>
              </li>

              <li className="flex flex-col lg:flex-row ">
                <p className="w-1/3 font-space font-bold">2023.06.69</p>
                <Link href="#" className="lg:w-2/3">
                  interview with emiliano garcia-lopez: on feng shui and ella
                  simmons
                </Link>
              </li>
            </ul>
          </div>

          <Footer></Footer>
        </div>
      </div>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';

import Arrow from './components/→';
import Button from './components/Button';
import Footer from './components/footer';
import GlowButton from './components/glowbutton';
import HeadlineDesktop from './components/headlineDesktop';
import HeadlineMobile from './components/headlineMobile';
import Navbar from './components/navbar';
import Slash from './components/slash';
import HeroGraphic from './components/heroGraphic';

export default function Home() {
  return (
    <main>
      <head></head>

      <body className="mx-auto min-h-screen font-sans">
        <div className="flex min-h-screen flex-col bg-primary text-white">
          <Navbar pageTitle="home" className=""/>


          <div className='absolute top-72 right-0 w-[326px] h-[270px] md:opacity-25 md:w-[600px] md:h-[500px] md:top-32 opacity-50 lg:opacity-50 xl:right-2'><HeroGraphic></HeroGraphic></div>

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

            <h1 className="relative hidden pb-4 font-space text-[64px] font-bold md:block z-10">
              Designer, Developer, <br />
              Pianist
            </h1>
            <h1 className="relative pb-4 font-space text-[40px] md:hidden z-10">
              Designer, <br /> Developer, <br />
              Pianist
            </h1>
            <GlowButton href="#" text="Hire me now" />
          </div>

          <div className="mt-36 md:mt-32 h-min rounded-t-[80px] bg-gradient-to-b from-darkbg via-darkbg via-60% to-transparent drop-shadow-[0_-200px_200px_rgba(255,255,255,0.04)] lg:rounded-t-[160px]">
            <div className="mx-6 mt-8 flex flex-col lg:mx-36">
              <div className="flex flex-row items-center">
                <div className="ml-[-32px] hidden lg:block">
                <div className="relative">
      <div className='md:hidden'><Slash h='51' w='45'></Slash></div>
      <div className='hidden md:block'><Slash h='110' w='96'></Slash></div>
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
                    <div >
                    <p className="w-full md:text-[36px]">Web/App Design </p>
                    <div className="absolute hidden  hover:block top-0 bottom-0 left-0 right-0">
                      <div className='absolute  right-0 top-4'><Arrow w="53" h="46"></Arrow></div>
                    </div>
                    
                    </div>
                  </Link>


                  <Link
                    href="projects"
                    className="relative flex w-full flex-row border-b-2 py-3 "
                  >
                    <div >
                    <p className="w-full md:text-[36px]">Electronics </p>
                    <div className="absolute hidden  hover:block top-0 bottom-0 left-0 right-0">
                      <div className='absolute  right-0 top-4'><Arrow w="53" h="46"></Arrow></div>
                    </div>
                    
                    </div>
                  </Link>

                  <Link
                    href="projects"
                    className="relative flex w-full flex-row border-b-2 py-3 "
                  >
                    <div >
                    <p className="w-full md:text-[36px]">Piano and Music </p>
                    <div className="absolute hidden  hover:block top-0 bottom-0 left-0 right-0">
                      <div className='absolute  right-0 top-4'><Arrow w="53" h="46"></Arrow></div>
                    </div>
                    
                    </div>
                  </Link>

                </div>
              </div>

              <div className="mb-8 mt-16 h-[10px] w-full rounded-full bg-gradient-to-b from-transparent via-lightaccent to-transparent md:mt-32"></div>
            </div>
          </div>

          <div className="mx-6 lg:mx-36">
            <h1 className="z-10 md:pt-6 font-space text-[24px] font-bold md:text-[64px]">
              Latest News
            </h1>

            <ul className='mt-12 flex flex-row md:flex-col overflow-x-auto space-x-4 md:space-x-0 md:space-y-10 md:h-[400px] md:border-t-4 md:rounded-t-[80px] md:border-b-4 md:rounded-b-[80px] md:bg-gradient-to-t from-darkerPrimary via-transparent via-20% '>



            <li className='md:mt-20 relative flex-shrink-0  h-[500px] w-[300px] md:h-[240px] md:w-full border-b-2  md:rounded-[20px] border-white md:border-none bg-gradient-to-b from-darkAccent md:bg-gradient-to-l md:from-[#2E0067B0] md:via-[#2E006740] md:via-80% '>
                <div className='flex flex-col md:flex-row-reverse md:p-[10px]'>
                  <div className='relative flex-shrink-0 w-full h-[200px] md:h-[220px] md:w-[380px]'><Image src='/siemens.png' className='object-cover  md:rounded-[20px]'fill></Image>

                  <div className="absolute rounded-[20px] bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-700 bg-fixed opacity-0 transition ease-in-out hover:opacity-80 z-0">   <div className='relative mt-[73px] ml-[130px] z-50'>                  <Arrow h='75' w='120' ></Arrow></div>    </div>
                  </div>
                    
                  <div className='p-4 w-full flex flex-col space-y-4 md:space-y-2 md:ml-8 md:mr-8'>                  
                  
                  
                  <h1 className='uppercase  text-[18px]'>web and app design</h1>

                  <h1 className='capitalize '>bing chilling website</h1>
                  <p className='xl:w-2/3'>She is notably very kind, friendly, cheerful, and outgoing. It is shown that Marin greatly dislikes overly-critical people.</p>
                  <Link href='#' className='absolute bottom-4 capitalize underline'>go to blog post ></Link>
                  </div>
                  <div className='flex-shrink-none hidden md:block h-[100px] w-[8px] bg-lightaccent rounded-full self-center'></div>

                </div>
              </li>


              <li className='relative flex-shrink-0  h-[500px] w-[300px] md:h-[240px] md:w-full border-b-2  md:rounded-[20px] border-white md:border-none bg-gradient-to-b from-darkAccent md:bg-gradient-to-l md:from-[#2E0067B0] md:via-[#2E006740] md:via-80% '>
                <div className='flex flex-col md:flex-row-reverse  md:p-[10px]'>
                  <div className='relative flex-shrink-0 w-full h-[200px] md:h-[220px] md:w-[380px]'><Image src='/siemens.png' className='object-cover  md:rounded-[20px]'fill></Image>

                  <div className="absolute rounded-[20px] bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-700 bg-fixed opacity-0 transition ease-in-out hover:opacity-80 z-0">   <div className='relative mt-[73px] ml-[130px] z-50'>                  <Arrow h='75' w='120' ></Arrow></div>    </div>
                  </div>
                    
                  <div className='p-4 w-full flex flex-col space-y-4 md:space-y-2 md:ml-8 md:mr-8'>                  
                  
                  
                  <h1 className='uppercase text-[18px]'>web and app design</h1>

                  <h1 className='capitalize '>bing chilling website</h1>
                  <p className='xl:w-2/3'>She is notably very kind, friendly, cheerful, and outgoing. It is shown that Marin greatly dislikes overly-critical people.</p>
                  <Link href='#' className='absolute bottom-4 capitalize underline'>go to blog post ></Link>
                  </div>
                  <div className='flex-shrink-none hidden md:block h-[100px] w-[8px] bg-lightaccent rounded-full self-center'></div>

                </div>
              </li>
              <li className=' relative flex-shrink-0  h-[500px] w-[300px] md:h-[240px] md:w-full border-b-2  md:rounded-[20px] border-white md:border-none bg-gradient-to-b from-darkAccent md:bg-gradient-to-l md:from-[#2E0067B0] md:via-[#2E006740] md:via-80% '>
                <div className='flex flex-col md:flex-row-reverse  md:p-[10px]'>
                  <div className='relative flex-shrink-0 w-full h-[200px] md:h-[220px] md:w-[380px]'><Image src='/siemens.png' className='object-cover  md:rounded-[20px]'fill></Image>

                  <div className="absolute rounded-[20px] bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-700 bg-fixed opacity-0 transition ease-in-out hover:opacity-80 z-0">   <div className='relative mt-[73px] ml-[130px] z-50'>                  <Arrow h='75' w='120' ></Arrow></div>    </div>
                  </div>
                    
                  <div className='p-4 w-full flex flex-col space-y-4 md:space-y-2 md:ml-8 md:mr-8'>                  
                  
                  
                  <h1 className='uppercase  text-[18px]'>web and app design</h1>

                  <h1 className='capitalize '>bing chilling website</h1>
                  <p className='xl:w-2/3'>She is notably very kind, friendly, cheerful, and outgoing. It is shown that Marin greatly dislikes overly-critical people.</p>
                  <Link href='#' className='absolute bottom-4 capitalize underline'>go to blog post ></Link>
                  </div>
                  <div className='flex-shrink-none hidden md:block h-[100px] w-[8px] bg-lightaccent rounded-full self-center'></div>

                </div>
              </li>

              <li className='py-12 w-full '><h1 className=' text-center hidden md:block'>uwu</h1></li>
            </ul>
   

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
      </body>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';

import Slash from './slash';
import FancyButton from './fancyButton';

export default function Navbar(props: any) {
  return (
    <nav className="pt-2 font-sans md:pt-6">
      <div className=" flex flex-row items-center pt-4 text-white xl:ml-20">
        <Link href="/" className=" flex flex-row items-center">
          <div className="ml-8">
            <div className="relative">
              <div className="md:hidden">
                <Slash h="51" w="45"></Slash>
              </div>
              <div className="hidden md:block">
                <Slash h="69" w="96"></Slash>
              </div>
            </div>
          </div>

          <h1 className="z-50 ml-[-32px] font-space text-xl opacity-80 md:ml-[-64px] md:text-4xl lg:ml-[-64px]">
            matthew_guo
            <span className="text-white opacity-50">/{props.pageTitle}</span>
          </h1>
        </Link>

        <div className="flex w-full flex-row-reverse items-end lg:mr-24">
          <div className="flex flex-row items-center">

            <Link href="#" className="px-6 lg:px-12
           hover:underline hidden md:block">
              sitemap
            </Link>
            <Link href="#" className="pl-6 lg:pl-12 pr-12 lg:pr-24  hover:underline hidden md:block">
              resume
            </Link >
            <div className='hidden md:block ' ><FancyButton href='#' text='work with me' svg={<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
</svg>}></FancyButton></div>

  




          </div>

          <div className="items-end space-y-2 pr-8 md:hidden">
            <span className="ml-3 block h-0.5 w-5 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="ml-2 block h-0.5 w-6 bg-white"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

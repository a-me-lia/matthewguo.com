import Image from 'next/image';
import Link from 'next/link';

import Slash from './slash';

export default function Navbar(props: any) {
  return (
    <nav className="pt-2 font-sans md:pt-6">
      <div className=" flex flex-row items-center pt-4 text-white lg:ml-20">
        <Link href="" className=" flex flex-row items-center">
          <div className="ml-8">
            <div className="relative">
              <div className="md:hidden">
                <Slash h="51" w="45"></Slash>
              </div>
              <div className="hidden md:block">
                <Slash h="110" w="96"></Slash>
              </div>
            </div>
          </div>

          <h1 className="z-50 ml-[-32px] font-space text-xl opacity-80 md:ml-[-64px] md:text-4xl lg:ml-[-64px]">
            matthew_guo
            <span className="text-white opacity-50">/{props.pageTitle}</span>
          </h1>
        </Link>

        <div className="flex w-full flex-row-reverse items-end lg:mr-24">
          <div className="hidden md:block">
            <Link href="#" className="px-6 hover:underline">
              sitemap
            </Link>
            <Link href="#" className="px-6 hover:underline">
              resumge
            </Link>
            <Link href="#" className="px-6 hover:underline">
              work with me
            </Link>
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

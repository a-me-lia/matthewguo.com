import Image from "next/image";
import Link from "next/link";

import Newsletter from "./newsletter";
import Slash from "./slash";

export default function Footer(props: any) {
  return (
    <footer>
      <div className="mx-6 flex flex-col space-y-8 pb-12 pt-48 text-white lg:flex-row lg:items-center lg:space-y-0">
        <div className="flex flex-col space-y-8 lg:ml-20 lg:w-full xl:flex-row  xl:items-center xl:space-y-0">
          <Link href="/">
            <div className="flex flex-row items-center ">
              <div className="relative">
                <div className="md:hidden">
                  <Slash h="51" w="45"></Slash>
                </div>
                <div className="hidden md:block">
                  <Slash h="69" w="96"></Slash>
                </div>
              </div>

              <h1 className="z-50 ml-[-32px] font-space text-xl opacity-80 md:ml-[-64px] md:text-4xl lg:ml-[-64px]">
                matthew_guo
              </h1>
            </div>
          </Link>

          <div className="flex flex-row items-center justify-between text-[18px] md:w-2/3 lg:ml-8 lg:w-full lg:justify-start lg:space-x-16 xl:pl-12">
            <Link href="#" className=" hover:underline">
              sitemap
            </Link>
            <Link href="#" className=" hover:underline">
              resume
            </Link>
            <Link href="#" className=" hover:underline">
              work with me
            </Link>
          </div>
        </div>

        <div className="mr-32 flex w-full flex-col md:w-1/2 lg:max-w-fit lg:items-center">
          <a className="text-[18px] text-white lg:uppercase ">
            subscribe to updates
          </a>
          <Newsletter></Newsletter>
        </div>
      </div>
    </footer>
  );
}

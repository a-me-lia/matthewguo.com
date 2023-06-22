import Image from 'next/image';
import Link from 'next/link';

import Arrow from './Arrow';

export default function news() {
  return (
    <div className="h-fit w-full ">
      <ul className=" mt-12 flex flex-row space-x-4 overflow-auto border-lightaccent from-black via-transparent via-20%  md:flex-col md:space-x-0 md:space-y-8 ">
        <li className="relative h-[500px] w-[300px]  shrink-0 border-b-2 border-white bg-gradient-to-b from-darkAccent  md:h-[200px] md:w-full md:rounded-[20px] md:border-none md:bg-gradient-to-r md:from-[#2E0067B0] md:via-[#2E006740] md:via-80% ">
          <div className="absolute inset-0 z-0 hidden h-full w-full  overflow-hidden bg-fixed  opacity-0 transition duration-500  ease-in-out hover:opacity-100 md:block">
            <div className=" ml-[10px] mt-6 hidden h-[150px] w-[8px] shrink-0 self-center rounded-full bg-lightaccent md:block"></div>
          </div>
          <div className="flex flex-col md:flex-row-reverse md:p-[10px]">
            <div className="relative h-[200px] w-full shrink-0 md:h-[180px] md:w-1/3 xl:w-1/4">
              <Link href="#">
                <Image
                  alt=""
                  src="/siemens.png"
                  className="object-cover  md:rounded-[20px]"
                  fill
                ></Image>
              </Link>

              <div className="absolute inset-0 z-0 hidden h-full w-full overflow-hidden rounded-[20px] bg-slate-700 bg-fixed opacity-0 transition duration-500 ease-in-out hover:opacity-90 md:block">
                <div className="relative z-50 mt-[50px] translate-x-1/3">
                  <Arrow h="75" w="120"></Arrow>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col space-y-4 p-2 md:mx-8 md:space-y-2">
              <h1 className="text-[18px]  uppercase">web and app design</h1>

              <h1 className="capitalize">bing chilling website</h1>
              <p className="xl:w-3/4">
                She is notably very kind, friendly, cheerful, and outgoing. It
                is shown that Marin greatly dislikes overly-critical people.
              </p>
              <Link href="#" className="absolute bottom-4 capitalize underline">
                go to blog post
              </Link>
            </div>
            <div className="hidden h-[50px] w-[8px] shrink-0 self-center rounded-full bg-lightaccent md:block"></div>
          </div>
        </li>
        <li className="relative h-[500px] w-[300px]  shrink-0 border-b-2 border-white bg-gradient-to-b from-darkAccent  md:h-[200px] md:w-full md:rounded-[20px] md:border-none md:bg-gradient-to-r md:from-[#2E0067B0] md:via-[#2E006740] md:via-80% ">
          <div className="absolute inset-0 z-0 hidden h-full w-full  overflow-hidden bg-fixed  opacity-0 transition duration-500  ease-in-out hover:opacity-100 md:block">
            <div className=" ml-[10px] mt-6 hidden h-[150px] w-[8px] shrink-0 self-center rounded-full bg-lightaccent md:block"></div>
          </div>
          <div className="flex flex-col md:flex-row-reverse md:p-[10px]">
            <div className="relative h-[200px] w-full shrink-0 md:h-[180px] md:w-1/3 xl:w-1/4">
              <Link href="#">
                <Image
                  alt=""
                  src="/siemens.png"
                  className="object-cover  md:rounded-[20px]"
                  fill
                ></Image>
              </Link>

              <div className="absolute inset-0 z-0 hidden h-full w-full overflow-hidden rounded-[20px] bg-slate-700 bg-fixed opacity-0 transition duration-500 ease-in-out hover:opacity-90 md:block">
                <div className="relative z-50 mt-[50px] translate-x-1/3">
                  <Arrow h="75" w="120"></Arrow>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col space-y-4 p-2 md:mx-8 md:space-y-2">
              <h1 className="text-[18px]  uppercase">web and app design</h1>

              <h1 className="capitalize">bing chilling website</h1>
              <p className="xl:w-3/4">
                She is notably very kind, friendly, cheerful, and outgoing. It
                is shown that Marin greatly dislikes overly-critical people.
              </p>
              <Link href="#" className="absolute bottom-4 capitalize underline">
                go to blog post
              </Link>
            </div>
            <div className="hidden h-[50px] w-[8px] shrink-0 self-center rounded-full bg-lightaccent md:block"></div>
          </div>
        </li>
        <li className="relative h-[500px] w-[300px]  shrink-0 border-b-2 border-white bg-gradient-to-b from-darkAccent  md:h-[200px] md:w-full md:rounded-[20px] md:border-none md:bg-gradient-to-r md:from-[#2E0067B0] md:via-[#2E006740] md:via-80% ">
          <div className="absolute inset-0 z-0 hidden h-full w-full  overflow-hidden bg-fixed  opacity-0 transition duration-500  ease-in-out hover:opacity-100 md:block">
            <div className=" ml-[10px] mt-6 hidden h-[150px] w-[8px] shrink-0 self-center rounded-full bg-lightaccent md:block"></div>
          </div>
          <div className="flex flex-col md:flex-row-reverse md:p-[10px]">
            <div className="relative h-[200px] w-full shrink-0 md:h-[180px] md:w-1/3 xl:w-1/4">
              <Link href="#">
                <Image
                  alt=""
                  src="/siemens.png"
                  className="object-cover  md:rounded-[20px]"
                  fill
                ></Image>
              </Link>

              <div className="absolute inset-0 z-0 hidden h-full w-full overflow-hidden rounded-[20px] bg-slate-700 bg-fixed opacity-0 transition duration-500 ease-in-out hover:opacity-90 md:block">
                <div className="relative z-50 mt-[50px] translate-x-1/3">
                  <Arrow h="75" w="120"></Arrow>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col space-y-4 p-2 md:mx-8 md:space-y-2">
              <h1 className="text-[18px]  uppercase">web and app design</h1>

              <h1 className="capitalize">bing chilling website</h1>
              <p className="xl:w-3/4">
                She is notably very kind, friendly, cheerful, and outgoing. It
                is shown that Marin greatly dislikes overly-critical people.
              </p>
              <Link href="#" className="absolute bottom-4 capitalize underline">
                go to blog post
              </Link>
            </div>
            <div className="hidden h-[50px] w-[8px] shrink-0 self-center rounded-full bg-lightaccent md:block"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}

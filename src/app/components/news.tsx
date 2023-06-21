import Image from 'next/image';
import Link from 'next/link';

import Arrow from './arrow';

export default function news(props: any) {
  return (
    <div className="h-fit w-full  rounded-[80px] bg-gradient-to-b from-black via-transparent  via-10%">
      <ul className=" mt-12 flex flex-row space-x-4 overflow-x-auto border-lightaccent from-black via-transparent via-20% md:h-[400px] md:w-full md:flex-col md:space-x-0 md:space-y-10 md:rounded-[80px] md:border-y-4 md:bg-gradient-to-t">
        <li className="relative h-[500px] w-[300px]  shrink-0 border-b-2 border-white bg-gradient-to-b from-darkAccent  md:mt-20 md:h-[240px] md:w-full md:rounded-[20px] md:border-none md:bg-gradient-to-l md:from-[#2E0067B0] md:via-[#2E006740] md:via-80% ">
          <div className="flex flex-col md:flex-row-reverse md:p-[10px]">
            <div className="relative h-[200px] w-full shrink-0 md:h-[220px] md:w-[380px]">
              <Image
                alt=""
                src="/siemens.png"
                className="object-cover  md:rounded-[20px]"
                fill
              ></Image>

              <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-[20px] bg-slate-700 bg-fixed opacity-0 transition duration-300  ease-in-out hover:opacity-80">
                <div className="relative z-50 ml-[130px] mt-[73px]">
                  <Arrow h="75" w="120"></Arrow>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col space-y-4 p-4 md:mx-8 md:space-y-2">
              <h1 className="text-[18px]  uppercase">web and app design</h1>

              <h1 className="capitalize">bing chilling website</h1>
              <p className="xl:w-2/3">
                She is notably very kind, friendly, cheerful, and outgoing. It
                is shown that Marin greatly dislikes overly-critical people.
              </p>
              <Link href="#" className="absolute bottom-4 capitalize underline">
                go to blog post
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

              <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-[20px] bg-slate-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-80">
                {' '}
                <div className="relative z-50 ml-[130px] mt-[73px]">
                  {' '}
                  <Arrow h="75" w="120"></Arrow>
                </div>{' '}
              </div>
            </div>

            <div className="flex w-full flex-col space-y-4 p-4 md:mx-8 md:space-y-2">
              <h1 className="text-[18px] uppercase">web and app design</h1>

              <h1 className="capitalize ">bing chilling website</h1>
              <p className="xl:w-2/3">
                She is notably very kind, friendly, cheerful, and outgoing. It
                is shown that Marin greatly dislikes overly-critical people.
              </p>
              <Link href="#" className="absolute bottom-4 capitalize underline">
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

              <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-[20px] bg-slate-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-80">
                {' '}
                <div className="relative z-50 ml-[130px] mt-[73px]">
                  {' '}
                  <Arrow h="75" w="120"></Arrow>
                </div>{' '}
              </div>
            </div>

            <div className="flex w-full flex-col space-y-4 p-4 md:mx-8 md:space-y-2">
              <h1 className="text-[18px]  uppercase">web and app design</h1>

              <h1 className="capitalize ">bing chilling website</h1>
              <p className="xl:w-2/3">
                She is notably very kind, friendly, cheerful, and outgoing. It
                is shown that Marin greatly dislikes overly-critical people.
              </p>
              <Link href="#" className="absolute bottom-4 capitalize underline">
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
  );
}

import Link from 'next/link';
import React from 'react';

import Arrow from './Arrow';
import Button from './Button';
import Slash from './slash';

export default function AboutMe(props: any) {
  return (
    <div>
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
            Marin Kitagawa is an above-average height girl with a slim waistline
            and light skin tone. Her eyes are naturally a dark brown, though she
            is almost always seen with dark pink color contacts when she
            isn`&apos`t cosplaying. She has very big boobs.
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
    </div>
  );
}

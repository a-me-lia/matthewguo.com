import React from 'react';

import { Accordion } from './accordianHome';
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

      <div className="mt-16 flex w-full flex-col lg:flex-row lg:space-x-8 xl:space-x-12">
        <div className="flex flex-col  md:flex-row md:space-x-16 lg:w-1/2 lg:flex-col lg:space-x-0 ">
          <div className="space-y-8 md:w-1/2 lg:w-full">
            <div className="mt-8 md:mt-0 ">
              <h1 className="pb-4 md:text-[32px]">at a glace...</h1>
              <p>- Hardworking</p>
              <p>- Not an Anime Girl</p>
              <p>- Not in Debt</p>
              <p>- I am definitely not Ella Simmons</p>
            </div>
            <p className="pb-12">
              Marin Kitagawa is an above-average height girl with a slim
              waistline and light skin tone. Her eyes are naturally a dark
              brown, though she is almost always seen with dark pink color
              contacts when she isn`&apos`t cosplaying. She has very big boobs.
            </p>
            <Button href="#" text="Read My Story"></Button>{' '}
            {/* how would i push this button down to align with the bototm like on the figma */}
          </div>
        </div>

        <div className="mt-8 flex flex-col md:hidden"></div>
        <div className="w-full md:mt-16  lg:mt-0 lg:w-1/2">
          <Accordion title={undefined} content={undefined}></Accordion>{' '}
          {/* TODO: template out the accordian feature so it's usable usiversally */}
        </div>
      </div>
    </div>
  );
}

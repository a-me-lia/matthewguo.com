'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

import Arrow from './arrow';

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title }) => {
  const [active1, setActive1] = useState(true);
  const [height1, setHeight1] = useState(`320px`);
  const [rotate1, setRotate1] = useState('transform duration-700 ease');
  const [active2, setActive2] = useState(false);
  const [height2, setHeight2] = useState('0px');
  const [rotate2, setRotate2] = useState('transform duration-700 ease');
  const [active3, setActive3] = useState(false);
  const [height3, setHeight3] = useState('0px');
  const [rotate3, setRotate3] = useState('transform duration-700 ease');
  const [lastToggled, setLastToggled] = useState(1);

  const contentSpace1 = useRef(null);
  const contentSpace2 = useRef(null);
  const contentSpace3 = useRef(null);

  function toggleAccordion1() {
    if (lastToggled === 2 && active2 === true) {
      setActive2((prevState) => !prevState);

      // @ts-ignore
      setHeight2(active2 ? '0px' : `${contentSpace2.current.scrollHeight}px`);
      setRotate2(
        active2
          ? 'transform duration-700 ease'
          : 'transform duration-700 ease rotate-180'
      );
    } else if (lastToggled === 3 && active3 === true) {
      setActive3((prevState) => !prevState);
      // @ts-ignore
      setHeight3(active3 ? '0px' : `${contentSpace3.current.scrollHeight}px`);
      setRotate3(
        active3
          ? 'transform duration-700 ease'
          : 'transform duration-700 ease rotate-180'
      );
    }

    setLastToggled(1);
    if (lastToggled !== 1) {
      setActive1((prevState) => !prevState);
      // @ts-ignore
      setHeight1(active1 ? '0px' : `${contentSpace1.current.scrollHeight}px`);
      setRotate1(
        active1
          ? 'transform duration-700 ease'
          : 'transform duration-700 ease rotate-180'
      );
    }
  }

  function toggleAccordion2() {
    if (lastToggled === 1 && active1 === true) {
      setActive1((prevState) => !prevState);
      setHeight1(active1 ? '0px' : `${contentSpace1.current.scrollHeight}px`);
      setRotate1(
        active1
          ? 'transform duration-700 ease'
          : 'transform duration-700 ease rotate-180'
      );
    } else if (lastToggled === 3 && active3 === true) {
      setActive3((prevState) => !prevState);
      // @ts-ignore
      setHeight3(active3 ? '0px' : `${contentSpace3.current.scrollHeight}px`);
      setRotate3(
        active3
          ? 'transform duration-700 ease'
          : 'transform duration-700 ease rotate-180'
      );
    }

    setLastToggled(2);
    if (lastToggled !== 2) {
      setActive2((prevState) => !prevState);

      // @ts-ignore
      setHeight2(active2 ? '0px' : `${contentSpace2.current.scrollHeight}px`);
      setRotate2(
        active2
          ? 'transform duration-700 ease'
          : 'transform duration-700 ease rotate-180'
      );
    }
  }

  function toggleAccordion3() {
    if (lastToggled === 1 && active1 === true) {
      setActive1((prevState) => !prevState);
      setHeight1(active1 ? '0px' : `${contentSpace1.current.scrollHeight}px`);
      setRotate1(
        active1
          ? 'transform duration-700 ease'
          : 'transform duration-700 ease rotate-180'
      );
    } else if (lastToggled === 2 && active2 === true) {
      setActive2((prevState) => !prevState);

      // @ts-ignore
      setHeight2(active2 ? '0px' : `${contentSpace2.current.scrollHeight}px`);
      setRotate2(
        active2
          ? 'transform duration-700 ease'
          : 'transform duration-700 ease rotate-180'
      );
    }

    if (lastToggled !== 3) {
      setLastToggled(3);
      setActive3((prevState) => !prevState);
      // @ts-ignore
      setHeight3(active3 ? '0px' : `${contentSpace3.current.scrollHeight}px`);
      setRotate3(
        active3
          ? 'transform duration-700 ease'
          : 'transform duration-700 ease rotate-180'
      );
    }
  }

  return (
    <div className="space-y-2 ">
      <div className="flex flex-col ">
        <button
          className="box-border flex cursor-pointer appearance-none items-center justify-between border-b-2 py-2 focus:outline-none"
          onClick={toggleAccordion1}
        >
          <p className="text:[18px] inline-block md:text-[36px]">
            Web and App Design
          </p>

          <Image
            src="/cheveron.svg"
            alt="Chevron icon"
            width="60"
            height="20"
            className={`${rotate1} hidden md:block `}
          ></Image>
        </button>
        <div
          ref={contentSpace1}
          style={{ maxHeight: `${height1}` }}
          className="overflow-auto overflow-y-hidden border-2 duration-700  ease-in-out"
        >
          <Link href="projects">
            {' '}
            <div className="relative h-72 md:h-40">
              <div className="absolute inset-0 z-10 opacity-100 transition duration-1000 ease-in-out hover:opacity-100 md:opacity-0">
                <div className="absolute right-2 top-4 md:bottom-4">
                  <Arrow w="30" h="24"></Arrow>
                </div>
              </div>
              <div className="flex h-full flex-col md:flex-row">
                {' '}
                <div className="relative h-1/2 shrink-0 py-2 md:h-full md:w-1/3">
                  <Image
                    src="/Hoshino.jpg"
                    fill
                    alt="Ai Hoshino"
                    className=" md:object-cover "
                  ></Image>
                </div>
                <div className="space-y-2 p-4">
                  <h1 className="">ELLA SIMMONS KAWAII</h1>
                  <p className="w-full  md:mr-6">
                    ella simmons has extremely balanced feng shui, we can fit
                    even more text here
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <button
          className="box-border flex cursor-pointer appearance-none items-center justify-between border-b-2 py-2 "
          onClick={toggleAccordion2}
        >
          <p className="text:[18px] inline-block md:text-[36px]">Electronics</p>
          <Image
            src="/cheveron.svg"
            alt="Chevron icon"
            width="60"
            height="20"
            className={`${rotate2} hidden md:block`}
          ></Image>
        </button>
        <div
          ref={contentSpace2}
          style={{ maxHeight: `${height2}` }}
          className="overflow-auto overflow-y-hidden border-2 duration-700 ease-in-out"
        >
          <Link href="projects">
            {' '}
            <div className="relative h-72 md:h-40">
              <div className="absolute inset-0 z-10 opacity-100 transition duration-1000 ease-in-out hover:opacity-100 md:opacity-0">
                <div className="absolute right-2 top-4 md:bottom-4">
                  <Arrow w="30" h="24"></Arrow>
                </div>
              </div>
              <div className="flex h-full flex-col md:flex-row">
                {' '}
                <div className="relative h-1/2 shrink-0 py-2 md:h-full md:w-1/3">
                  <Image
                    src="/Hoshino.jpg"
                    fill
                    alt="Ai Hoshino"
                    className=" md:object-cover "
                  ></Image>
                </div>
                <div className="space-y-2 p-4">
                  <h1 className="">ELLA SIMMONS KAWAII</h1>
                  <p className="w-full  md:mr-6">
                    ella simmons has extremely balanced feng shui, we can fit
                    even more text here
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <button
          className="box-border flex cursor-pointer appearance-none items-center justify-between border-b-2 py-2 focus:outline-none"
          onClick={toggleAccordion3}
        >
          <p className="text:[18px] inline-block  md:text-[36px]">
            Piano and Music
          </p>
          <Image
            src="/cheveron.svg"
            alt="Chevron icon"
            width="60"
            height="20"
            className={`${rotate3}  hidden md:block`}
          ></Image>
        </button>
        <div
          ref={contentSpace3}
          style={{ maxHeight: `${height3}` }}
          className="overflow-auto overflow-y-hidden border-2 duration-700 ease-in-out"
        >
          <Link href="pianoMusic">
            {' '}
            <div className="relative h-72 md:h-40">
              <div className="absolute inset-0 z-10 opacity-100 transition duration-1000 ease-in-out hover:opacity-100 md:opacity-0">
                <div className="absolute right-2 top-4 md:bottom-4">
                  <Arrow w="30" h="24"></Arrow>
                </div>
              </div>
              <div className="flex h-full flex-col md:flex-row">
                {' '}
                <div className="relative h-1/2 shrink-0 py-2 md:h-full md:w-1/3">
                  <Image
                    src="/Hoshino.jpg"
                    fill
                    alt="Ai Hoshino"
                    className=" md:object-cover "
                  ></Image>
                </div>
                <div className="space-y-2 p-4">
                  <h1 className="">ELLA SIMMONS KAWAII</h1>
                  <p className="w-full  md:mr-6">
                    ella simmons has extremely balanced feng shui, we can fit
                    even more text here
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

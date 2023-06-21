import Link from "next/link";
import React from "react";

export default function Blog(props: any) {
  return (
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
          interview with emiliano garcia-lopez: on feng shui and ella simmons
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
          interview with emiliano garcia-lopez: on feng shui and ella simmons
        </Link>
      </li>
    </ul>
  );
}

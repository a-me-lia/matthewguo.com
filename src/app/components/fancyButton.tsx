import Link from 'next/link';

export default function FancyButton(props: any) {
  return (
    <Link href={props.href} className=" hidden hover:underline md:block">
      <button
        type="button"
        className="rounded-[12px] bg-gradient-to-b from-[#04D2A9] to-[#0AA48A] p-px leading-none shadow-sm transition hover:scale-110 md:inline-block"
      >
        <span className=" rounded-[11px] bg-gradient-to-b from-[#4DDFC2] to-[#04D2A9] p-px md:inline-block">
          <span className="font-bold items-center gap-x-1.5 rounded-[10px] bg-[#04D2A9] px-2 py-1 text-sm text-white md:inline-flex">
            {props.text}
            <span className="ml-0.5 h-5 w-5 items-center justify-center rounded-md bg-[#03BE99] text-xs md:inline-flex">
              {props.svg}
            </span>
          </span>
        </span>
      </button>
    </Link>
  );
}

import Link from 'next/link';

export default function FancyButton(props: any) {
  return (
    <Link href={props.href} className=" hover:underline hidden md:block">
    <button type="button" class="md:inline-block rounded-[12px] bg-gradient-to-b from-[#04D2A9] to-[#0AA48A] leading-none p-px shadow-sm hover:scale-110 transition">
<span class="md:inline-block rounded-[11px] bg-gradient-to-b from-[#4DDFC2] to-[#04D2A9] p-px hover:slac">
<span class="md:inline-flex rounded-[10px] items-center gap-x-1.5 bg-[#04D2A9] px-2 py-1 text-sm text-bold text-white">


{props.text}
<span class="md:inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#03BE99] text-xs ml-0.5">{props.svg}</span>
</span>
</span>
</button>
    </Link>
  );
}
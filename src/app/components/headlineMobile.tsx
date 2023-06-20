import Link from 'next/link';

export default function headlineDesktop(props: any) {


  return (
    <Link href={props.href}>
      <div className="relative z-50 h-8 w-2/3 bg-gradient-to-r from-darkAccent via-transparent via-10%"></div>
      <div className="relative z-50 mt-[-32px] h-8 w-2/3 bg-gradient-to-l from-darkAccent via-transparent via-10%"></div>
      <div className="relative z-0 mt-[-32px] w-2/3 overflow-x-hidden bg-darkAccent">
        <span className="animate-marqueeSmall whitespace-nowrap pb-2 pt-1.5">
          {props.text}  {props.text}  {props.text}  {props.text}
        </span>
      </div>
    </Link>
  );
}

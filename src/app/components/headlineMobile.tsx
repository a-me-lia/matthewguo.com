import Link from 'next/link';

export default function headlineDesktop(props: any) {
  return (
    <Link href={props.href}>
      <div className=" w-2/3 bg-darkAccent ">
        <p className="px-6 pb-2 pt-1.5 ">{props.text}</p>
      </div>
    </Link>
  );
}

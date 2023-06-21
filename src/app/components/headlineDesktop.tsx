import Link from "next/link";

export default function headlineDesktop(props: any) {
  return (
    <Link href={props.href}>
      <div className="relative z-0 mt-[-32px] w-fit bg-darkAccent">
        <p className=" px-6 pb-2 pt-1.5">{props.text}</p>
      </div>
    </Link>
  );
}

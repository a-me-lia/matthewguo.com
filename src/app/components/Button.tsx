import Link from 'next/link';

export default function button(props: any) {
  return (
    <div>
      <div className="w-fit border-2 border-white">
        <div className="px-8 pb-[0.60rem] pt-2">
          {' '}
          <Link href={props.href} className="">
            {props.text}
          </Link>{' '}
        </div>
      </div>
    </div>
  );
}

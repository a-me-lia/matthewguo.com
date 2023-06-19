import Link from 'next/link'

export default function glowbutton(props: any) {
  return (
    <div>

            <div className='w-fit border-2 border-white'>
                <div className='px-8 pt-2 pb-[0.60rem]'>        <Link href={props.href} className=''>{props.text}</Link>            </div>
            
            </div>


            <div className='absolute h-64 w-96 translate-x-[-112px] translate-y-[-152px] bg-gradient-radial from-white via-white via-20% to-transparent to-60% opacity-[0.10]'></div>

    </div>

        
  )
}

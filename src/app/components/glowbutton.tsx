import Link from 'next/link'

export default function glowbutton(props: any) {
  return (
    <div>

            <div className='w-fit border-2 border-white border-opacity-50 md:border-white md:border-opacity-100'>
                <div className='px-4 py-1 md:px-8 md:pt-2 md:pb-[0.60rem]'>        <Link href={props.href} className=''>{props.text}</Link>            </div>
            
            </div>


            <div className='absolute h-64 w-96 translate-x-[-112px] translate-y-[-152px] bg-gradient-radial from-white via-white via-30% to-transparent to-60% opacity-[0.05]'></div>

    </div>

        
  )
}
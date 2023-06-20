import Link from 'next/link'

export default function button(props: any) {
  return (
    <div>

            <div className='w-fit border-2 border-white'>
                <div className='px-8 pt-2 pb-[0.60rem]'>        <Link href={props.href} className=''>{props.text}</Link>            </div>
            
            </div>

    </div>

        
  )
}

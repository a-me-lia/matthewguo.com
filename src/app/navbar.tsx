import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(props: any) {
  return (
    <nav className="h-16 pt-2 md:h-36 md:pt-6 ">


            <div className='absolute'>        
                <div className='relative w-[45px] h-[51px] md:w-[96px] md:h-[110px]'>
                    <Image  className='ml-4 lg:ml-24 z-0 object-cover' src='/../public/slash.png' alt ='' fill/>
                </div>
            </div>



            <div className='relative flex flex-row h-full items-center lg:ml-20'>
                <h1 className='font-space opacity-80 text-xl md:text-4xl pl-8 md:pl-12 z-50'>matthew_guo<span className='text-white opacity-50'>/{props.pageTitle}</span></h1> 

                <div className='flex flex-row-reverse w-full lg:mr-24 items-end'>

                    <div className='hidden md:block'>
                        <Link href='#' className='px-6 hover:underline'>sitemap</Link>
                        <Link href='#' className='px-6 hover:underline'>resume</Link>
                        <Link href='#' className='px-6 hover:underline'>work with me</Link>
                    </div>

                    <div className="space-y-2 pr-4 items-end md:hidden">
                        <span className="block ml-3 w-5 h-0.5 bg-white"></span>
                        <span className="block w-8 h-0.5 bg-white"></span>
                        <span className="block ml-2 w-6 h-0.5 bg-white"></span>
                    </div>
                </div>

        </div>
    </nav>
  )
}

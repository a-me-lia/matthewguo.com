import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(props: any) {
  return (
    <nav className=" pt-2 md:pt-6 ">




            <div className='relative flex flex-row h-full items-center lg:ml-20 pt-4'>

                
                <div className='ml-8'>       {/*for some reason this markup necessary to render correctly   */}

                    <div className='relative w-[45px] h-[51px] md:w-[96px] md:h-[110px]'>
                        <Image  className=' z-0 object-cover' src='/../public/slash.png' alt ='' fill/>
                     </div>

                </div>


                <h1 className='font-space opacity-80 text-xl md:text-4xl ml-[-32px] md:ml-[-64px] lg:ml-[-64px] z-50'>matthew_guo<span className='text-white opacity-50'>/{props.pageTitle}</span></h1> 

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

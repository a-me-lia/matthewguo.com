import Link from 'next/link'
import Image from 'next/image'
import Newsletter from './newsletter'

export default function Footer(props: any) {
  return (
<footer>

            <div className='pt-48 flex flex-col lg:flex-row lg:items-center mx-6 space-y-8 lg:space-y-0 pb-12'>

 
            <div className='flex flex-col xl:flex-row xl:items-center xl:space-y-0 space-y-8  lg:ml-20 lg:w-full'> 
                  <Link href='/'>
                <div className='flex flex-row items-center '> 

                <div className='relative w-[45px] h-[51px] md:w-[96px] md:h-[110px]'>
                    <Image  className=' z-0 object-cover' src='/../public/slash.png' alt ='' fill/>
                </div>

                <h1 className='font-space opacity-80 text-xl md:text-4xl ml-[-32px] md:ml-[-64px] lg:ml-[-64px] z-50'>matthew_guo</h1> 

                

                </div></Link>

                
                <div className='flex flex-row md:w-2/3 lg:w-full text-[18px] justify-between items-center lg:justify-start lg:space-x-16 lg:ml-8 xl:pl-12'>
                        <Link href='#' className=' hover:underline'>sitemap</Link>
                        <Link href='#' className=' hover:underline'>resume</Link>
                        <Link href='#' className=' hover:underline'>work with me</Link>


                </div>


            </div>

                





                <div className='flex flex-col lg:items-center mr-32 w-full md:w-1/2 lg:max-w-fit'>
                    <a className="text-[18px] text-white lg:uppercase ">subscribe to updates</a>
                    <Newsletter></Newsletter>
                </div>
            </div>
            

</footer>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/navbar'
import GlowButton from './Glowbutton'
import Button from './Button'
import HeadlineDesktop from './headlineDesktop'
import HeadlineMobile from './headlineMobile'
import Arrow from './→'


export default function Home() {
  return (
    
    <main>
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>

      <body className=" min-h-screen mx-auto">

      <div className='flex flex-col bg-primary min-h-screen'>
        

          <Navbar pageTitle ='home' className=''/>

          <div className='ml-10 lg:ml-36 mt-20 space-y-4'>
            <div className='hidden md:block'>
              <HeadlineDesktop className='font-space' text='Feng shui app, Simmons, secures 2M Series-A funding round →'/>
              {/* should add HeadlineMobile later */}
            </div>
            <h1 className='hidden font-space  text-[64px] pb-4 font-bold md:block'>Designer, Developer, <br/>Pianist</h1>
            <h1 className='font-space text-[40px] pb-4 md:hidden'>Designer, <br/> Developer, <br/>Pianist</h1>
            <GlowButton href='#' text='Hire me now'/>
          </div>

          <div className='h-min bg-gradient-to-b from-darkbg to-transparent rounded-t-[80px] lg:rounded-t-[160px] mt-24 drop-shadow-[0_-200px_200px_rgba(255,255,255,0.04)]'>
           
            <div className='flex flex-col mx-10 lg:mx-36 mt-8'>
                <div className='flex flex-row items-center'>

                <div className='ml-[-32px] hidden lg:block'>      
                  <div className='relative w-[45px] h-[51px] md:w-[96px] md:h-[110px]'>
                    <Image  className='z-0 object-cover lg:block' src='/../public/slash.png' alt ='' fill/>
                  </div>
                </div>

                <h1 className='text-[24px] md:text-[64px] pt-6 lg:ml-[-60px] font-space font-bold z-10'>About Me</h1>

                </div>


                <div className='mt-8 flex flex-col md:flex-row space-x-8 lg:space-x-32 md:items-center'>

                  
                
                  <div className='flex flex-col md:w-1/2 space-y-8'>
                  <p>Marin Kitagawa is an above-average height girl with a slim waistline and light skin tone. Her eyes are naturally a dark brown, though she is almost always seen with dark pink color contacts when she isn`&apos`t cosplaying. She has very big boobs.</p>
                    <Button href='#' text='Read My Story'></Button> {/* how would i push this button down to align with the bototm like on the figma */}
                  </div>

                  <div className='flex flex-col mt-8 md:w-1/2'>
                    <Link href='#' className=' flex flex-row w-full py-3 border-b-2 hover:block'>
                      <p className='w-full md:text-[36px]'>Web/App Design </p>
                      <div className='md:hidden'><Arrow w='25' h='22'></Arrow></div> {/* kinda fucked ngl */}
                      <div className='hidden '><Arrow w='53' h='46'></Arrow></div>
                    </Link>
                    <Link href='#' className=' flex flex-row w-full py-3 border-b-2 hover:block'>
                      <p className='w-full md:text-[36px]'>Electronics </p>
                      <div className='md:hidden'><Arrow w='25' h='22'></Arrow></div>
                      <div className='hidden '><Arrow w='53' h='46'></Arrow></div>
                    </Link>
                    <Link href='#' className=' flex flex-row w-full py-3 border-b-2 hover:block'>
                      <p className='w-full md:text-[36px]'>Piano and Music </p>
                      <div className='md:hidden'><Arrow w='25' h='22'></Arrow></div>
                      <div className='hidden '><Arrow w='53' h='46'></Arrow></div>
                    </Link>

                  </div>
                </div>

                <div className='w-full h-[10px] mt-16 md:mt-32 mb-8 bg-gradient-to-b from-transparent via-lightaccent to-transparent'></div>


            </div>

          </div>

      </div>
      </body>



    </main>
  )
}

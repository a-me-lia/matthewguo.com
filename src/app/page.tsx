import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/navbar'
import GlowButton from './Glowbutton'
import Button from './Button'
import HeadlineDesktop from './headlineDesktop'


export default function Home() {
  return (
    
    <main className="flex flex-col min-h-screen mx-auto bg-primary">
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>


      <div>

        <Navbar pageTitle ='home'/>

        <div className='ml-48 mt-20 space-y-4'>

          <div className=' w-fit bg-darkAccent'>
            <HeadlineDesktop text='Feng shui app, Simmons, secures 2M Series-A funding round →'/>
          </div>



          <h1 className='font-space text-7xl pb-4'>Designer, Developer, <br/>Pianist</h1>



          <GlowButton href='#' text='Hire me now'/>


        </div>

      </div>

    </main>
  )
}

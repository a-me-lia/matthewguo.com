import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import GlowButton from '../components/glowbutton'
import Button from '../components/Button'
import HeadlineDesktop from '../components/headlineDesktop'
import HeadlineMobile from '../components/headlineMobile'
import Arrow from '../components/→'
import Footer from '../components/footer'



export default function PianoMusic() {
  return (
    
    <main>
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>

      <body className=" min-h-screen mx-auto">

      <div className='flex flex-col bg-primary min-h-screen text-white'>
        

          <Navbar pageTitle ='cobtact' className=''/>

          <Footer></Footer>


        </div>
      </body>



    </main>
  )
}

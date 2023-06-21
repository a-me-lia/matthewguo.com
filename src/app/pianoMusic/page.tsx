import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function PianoMusic() {
  return (
    <main>
      <body className=" mx-auto min-h-screen">
        <div className="flex min-h-screen flex-col bg-primary text-white">
          <Navbar pageTitle="piano" className="" />

          <div className="ml-10 mt-20 space-y-4 lg:ml-36">
            <div className="hidden md:block"></div>
            <h1 className="hidden pb-4  font-space text-[64px] font-bold md:block">
              Mozart quote lol
            </h1>
            <h1 className="pb-4 font-space text-[40px] md:hidden">
              Mozart Quote lol
            </h1>
          </div>

          <Footer></Footer>
        </div>
      </body>
    </main>
  );
}

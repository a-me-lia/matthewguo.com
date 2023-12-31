import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Projects() {
  return (
    <main>
      <body className=" mx-auto min-h-screen">
        <div className="flex min-h-screen flex-col bg-primary text-white">
          <Navbar pageTitle="projects" className="" />

          <div className="ml-10 mt-20 space-y-4 lg:ml-36">
            <div className="hidden md:block"></div>
            <h1 className="hidden pb-4  font-space text-[64px] font-bold md:block">
              Creating
              <br />
              Everything
            </h1>
            <h1 className="pb-4 font-space text-[40px] md:hidden">
              Creating <br /> Everything
            </h1>
          </div>

          <Footer></Footer>
        </div>
      </body>
    </main>
  );
}

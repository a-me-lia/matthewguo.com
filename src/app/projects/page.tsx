import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Projects() {
  return (
    <main>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>

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

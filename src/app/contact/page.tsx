import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function PianoMusic() {
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
          <Navbar pageTitle="cobtact" className="" />

          <Footer></Footer>
        </div>
      </body>
    </main>
  );
}

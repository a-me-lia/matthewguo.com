import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function PianoMusic() {
  return (
    <main>
      <body className=" mx-auto min-h-screen">
        <div className="flex min-h-screen flex-col bg-primary text-white">
          <Navbar pageTitle="cobtact" className="" />

          <Footer></Footer>
        </div>
      </body>
    </main>
  );
}

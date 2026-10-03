import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Newsletter from "../components/Newsletter";

export default function Page() {
  return (
    <>
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero/>
      <Card/>
      <Newsletter/>
      <Footer />
    </main>
     
    </>
  );
}
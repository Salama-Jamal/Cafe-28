import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PopularProducts />
      <About />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}

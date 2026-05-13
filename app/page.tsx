import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";
import About from "./components/About";
import Calculator from "./components/Calculator";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurWork />
      <About />
      <Calculator />
    </>
  );
}
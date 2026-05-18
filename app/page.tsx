import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";
import About from "./components/About";
import Calculator from "./components/Calculator";
import Contact from "./components/Contact";   
import LoginPage from "./login/page";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurWork />
      <About />
      <Calculator />
      <Contact />
      <LoginPage />

    </>
  );
}
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";
import Popular from "./components/Popular";
import "./globals.css";
const Frontpage = () => {
  return (
    <>
      <Hero />
      <About />
      <News />
      <Popular />
    </>
  );
};

export default Frontpage;

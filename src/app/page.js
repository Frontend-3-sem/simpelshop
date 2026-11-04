import Hero from "./components/Frontpage/Hero";
import About from "./components/Frontpage/About";
import News from "./components/Frontpage/News";
import Popular from "./components/Frontpage/Popular";
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

import Navbar from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Work from "./Components/Work";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import ScrollProgress from "./Components/ScrollProgress";
import "./Styles/ScrollProgress.css";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About/>
      <Work/>
      <Experience/>
      <Contact/>
    </>
  );
}

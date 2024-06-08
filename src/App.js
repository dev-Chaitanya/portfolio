import "./App.css";
import { Navbar } from "./Components/Navbar";
import Hero from "./Components/Hero";
import { About } from "./Components/About";
import { Work } from "./Components/Work";
import { Whyme } from "./Components/Whyme";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <header id="header">
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Work />
        <Whyme />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/story/About";
import Services from "./components/story/Services";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

export default App;
import Services from "./components/Services";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Proses from "./components/Proses";
import Roadmap from "./components/Roadmap";
import Products from "./components/Products";
import Manifesting from "./components/Manifesting";
import Portfolio from "./components/Portfolio";
import Testimonies from "./components/Testimonies";
import Faq from "./components/FaQ";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Hero />
        <Services />
        <Roadmap />
        <Proses />
        <Products/>
        <Portfolio />
        <Manifesting/>
        <Testimonies/>
        <Faq/>
        <Contact/>
        <Footer />
      </div>
    </>
  );
};

export default App;

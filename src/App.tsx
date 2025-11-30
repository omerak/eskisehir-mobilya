import Hero from './components/Hero';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Process from './components/Process';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Advantages />
      <Process />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

export default App;

import Navigation from './components/ui/custom/Navigation';
import WhatsAppButton from './components/ui/custom/WhatsAppButton';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import Booking from './sections/Booking';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0E27]">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

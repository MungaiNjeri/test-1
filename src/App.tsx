import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Process />
      <FeaturedProjects />
      <Testimonials />
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;

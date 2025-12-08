import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import BackgroundAnimation from './components/BackgroundAnimation';
import ServicesSection from './components/ServicesSection';
import NavigationOnly from './components/header';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <NavigationOnly />
      <CursorFollower />
      <BackgroundAnimation />
      <Hero />
      <About />
      <ServicesSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

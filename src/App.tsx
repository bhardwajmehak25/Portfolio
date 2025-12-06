import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import BackgroundAnimation from './components/BackgroundAnimation';


function App() {
  return (
    <div className="min-h-screen bg-black">
      <CursorFollower />
 <BackgroundAnimation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

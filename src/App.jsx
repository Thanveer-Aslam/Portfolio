import './index.css';
import NavBar from "./components/NavBar";
import HeroSection from "./pages/HeroSection";
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import BackToTop from './components/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; 
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;

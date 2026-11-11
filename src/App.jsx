import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { About } from './components/About';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './styles/global.css';

export default function App() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  return <><Header/><main><Hero/><Projects/><About/><Experience/><Resume/><Contact/></main>{showTop && <a href="#home" className="back-top" aria-label="Back to top"><ArrowUp size={17}/></a>}</>;
}

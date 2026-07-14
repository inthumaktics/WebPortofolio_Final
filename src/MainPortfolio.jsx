import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import CoreTechnologies from './sections/CoreTechnologies';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function MainPortfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans selection:bg-blue-600/10 selection:text-blue-700 antialiased transition-colors duration-300">
      {/* Navigation */}
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Core Technologies Section */}
        <CoreTechnologies />

        {/* Journey Section */}
        <Journey />

        {/* Projects Section (Featured & Other) */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Achievements Section */}
        <Achievements />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

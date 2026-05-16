import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamesGrid from './components/GamesGrid';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-studio-light dark:bg-studio-night">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <GamesGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

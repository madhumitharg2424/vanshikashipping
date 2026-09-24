import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Hero />
            <Highlights />
            <About />
            <Services />
            <Contact />
          </main>
          <Footer />
          <FloatingButtons />
        </div>
      )}
    </>
  );
}

export default App;


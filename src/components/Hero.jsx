import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1920", // Port/Ship
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920", // Containers
  "https://images.unsplash.com/photo-1586528116311-ad8ed7cad480?auto=format&fit=crop&q=80&w=1920", // Warehouse
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920", // Airplane
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1920", // Cranes/Logistics
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center pt-20">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
          />
        </AnimatePresence>
        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 text-white pt-12 md:pt-0">
        <div className="max-w-4xl mx-auto md:mx-0">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 mb-6 text-xs md:text-sm font-bold tracking-widest text-dark bg-gradient-gold rounded-full uppercase shadow-lg">
              VANSHIKAA SHIPPING AND FORWARDING
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Global Shipping. <br className="hidden md:block" />
            Trusted Forwarding. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold">Seamless Logistics.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed"
          >
            Vanshikaa Shipping and Forwarding offers reliable import, export, freight forwarding, customs clearance and logistics solutions through sea, air and land transportation.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-10"
          >
            <p className="text-xl md:text-2xl text-gold-light font-medium italic">
              "Your Trusted Logistics Partner Across the Globe."
            </p>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;

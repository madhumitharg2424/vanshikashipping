import { motion } from 'framer-motion';
import { Package, Ship, Plane, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}</>;
};

const Highlights = () => {
  const cards = [
    {
      icon: <Package size={40} className="text-primary mb-4" />,
      title: "Shipments Managed",
      value: "1000+",
      isNumber: true,
      delay: 0.1,
    },
    {
      icon: <Globe size={40} className="text-primary mb-4" />,
      title: "Import & Export",
      value: "Logistics",
      isNumber: false,
      delay: 0.2,
    },
    {
      icon: <Plane size={40} className="text-primary mb-4" />,
      title: "Air • Sea • Land",
      value: "Freight Services",
      isNumber: false,
      delay: 0.3,
    },
    {
      icon: <Ship size={40} className="text-primary mb-4" />,
      title: "Trusted Shipping &",
      value: "Forwarding Partner",
      isNumber: false,
      delay: 0.4,
    },
  ];

  return (
    <section className="relative -mt-16 z-30 px-4 md:px-8 mb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: card.delay }}
              className="bg-white rounded-xl shadow-xl p-8 border-b-4 border-gold hover-lift flex flex-col items-center text-center"
            >
              {card.icon}
              {card.isNumber ? (
                <h3 className="text-4xl font-bold text-dark mb-2">
                  <AnimatedCounter end={1000} />+
                </h3>
              ) : (
                <h3 className="text-xl font-bold text-dark mb-2 leading-tight">
                  {card.value}
                </h3>
              )}
              <p className="text-gray-600 font-medium">{card.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

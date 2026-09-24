import { motion } from 'framer-motion';
import { 
  Box, Anchor, Truck, Briefcase, 
  ShoppingCart, FileCheck, Map, Hammer
} from 'lucide-react';

const servicesList = [
  {
    title: "NVOCC Container Services",
    icon: <Box size={32} className="text-gold" />,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "International Freight Forwarding by Air & Sea",
    icon: <Anchor size={32} className="text-gold" />,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Console Services for Land, Air and Sea",
    icon: <Truck size={32} className="text-gold" />,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Projects & Special Cargo Services",
    icon: <Briefcase size={32} className="text-gold" />,
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Container Trading – Buying & Selling",
    icon: <ShoppingCart size={32} className="text-gold" />,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "In-House Customs Clearance",
    icon: <FileCheck size={32} className="text-gold" />,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Domestic Transportation & Distribution",
    icon: <Map size={32} className="text-gold" />,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Container Fabrication",
    icon: <Hammer size={32} className="text-gold" />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-lavender">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            Our Complete Logistics Services
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gold mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-primary/10 hover:border-primary transition-all duration-300 hover-lift group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md z-10">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

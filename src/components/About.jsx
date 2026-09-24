import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1000" 
                alt="Shipping Containers" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                About Vanshikaa Shipping and Forwarding
              </h2>
              <div className="h-1 w-24 bg-gold rounded-full"></div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Vanshikaa Shipping and Forwarding is a trusted logistics and freight forwarding company based in Chennai. We specialize in international sea freight, air freight, customs clearance, multimodal transportation, container trading, warehousing, domestic transportation and distribution.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We provide safe, reliable and timely cargo movement with customer-focused service for import and export businesses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

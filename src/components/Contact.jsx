import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Vanshikaa Shipping and Forwarding,
    
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Shipment Requirement: ${formData.requirement}

I would like to enquire about your shipping services. Please contact me.`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919566174411?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-lavender relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gold mx-auto rounded-full"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 p-8 md:p-12 bg-primary text-white"
          >
            <h3 className="text-3xl font-bold mb-8 text-gold">Vanshikaa Shipping and Forwarding</h3>
            
            <div className="space-y-6 mb-10 text-lg">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1 shrink-0" size={24} />
                <p>233/109, Thambu Chetty Street,<br />Chennai – 600001.</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="text-gold shrink-0" size={24} />
                <a href="tel:+919566174411" className="hover:text-gold transition-colors">+91 9566174411</a>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="text-gold shrink-0" size={24} />
                <a href="mailto:info@maavanshikaashipping.com" className="hover:text-gold transition-colors break-all">info@maavanshikaashipping.com</a>
              </div>
              
              <div className="flex items-center gap-4">
                <Globe className="text-gold shrink-0" size={24} />
                <a href="https://vanshikaashipping.com" className="hover:text-gold transition-colors">vanshikaashipping.com</a>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="w-full h-[300px] rounded-xl overflow-hidden border-2 border-primary-dark">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1132144369466!2d80.2882200742542!3d13.091993412234033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f58229b3113%3A0xea5a8eb2eb5e2de9!2sThambu%20Chetty%20St%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vanshikaa Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-dark mb-6">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+91 9876543210"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="requirement">Shipment Requirement</label>
                <textarea 
                  id="requirement"
                  name="requirement"
                  required
                  rows="4"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your shipping needs..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg flex justify-center items-center gap-2 text-lg transform hover:-translate-y-1"
              >
                Send Enquiry via WhatsApp
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

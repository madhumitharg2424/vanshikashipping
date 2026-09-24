import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        href="tel:+919566174411"
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-gold transition-colors duration-300 relative group"
        aria-label="Call Us"
      >
        <Phone size={24} className="text-white" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Now
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        href="https://wa.me/919566174411?text=Hi%20Vanshikaa%20Shipping%20and%20Forwarding,%20I%20would%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors duration-300 relative group"
        aria-label="WhatsApp Us"
      >
        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
        
        <MessageCircle size={28} className="text-white relative z-10" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Us
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingButtons;

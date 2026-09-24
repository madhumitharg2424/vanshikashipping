const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-primary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Left: Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src="/logo.png" alt="Vanshikaa Logo" className="h-16 w-auto mb-4 object-contain" onError={(e) => e.target.style.display = 'none'} />
            <h4 className="text-xl font-bold text-primary mb-2 tracking-wide">VANSHIKAA</h4>
            <p className="text-gray-600 font-medium">Shipping and Forwarding</p>
          </div>

          {/* Middle: Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-bold text-dark mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-600 hover:text-primary transition-colors font-medium">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors font-medium">About Us</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors font-medium">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-lg font-bold text-dark mb-6">Contact Us</h4>
            <div className="space-y-3 text-gray-600 font-medium">
              <p>
                <span className="block text-sm text-gray-400 mb-1">Phone</span>
                <a href="tel:+919566174411" className="hover:text-primary transition-colors">+91 9566174411</a>
              </p>
              <p>
                <span className="block text-sm text-gray-400 mb-1">Email</span>
                <a href="mailto:info@maavanshikaashipping.com" className="hover:text-primary transition-colors">info@maavanshikaashipping.com</a>
              </p>
              <p>
                <span className="block text-sm text-gray-400 mb-1">Address</span>
                Chennai – 600001.
              </p>
            </div>
          </div>
          
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm font-medium">
            © 2026 Vanshikaa Shipping and Forwarding. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

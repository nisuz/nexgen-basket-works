
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Majestic Home Decor</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for quality products at affordable prices. Shop with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-coral-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-300 hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-coral-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Commerce St, Shopping City, SC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-coral-400" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-coral-400" />
                <span className="text-gray-300">support@majestichomedecor.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Majestic Home Decor. All rights reserved.
          </p>
          <div className="flex items-center">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-visa-5-226400.png" alt="Visa" className="h-8 mr-2" />
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-mastercard-3521564-2944982.png" alt="Mastercard" className="h-8 mr-2" />
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-paypal-3521542-2944960.png" alt="PayPal" className="h-8 mr-2" />
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-apple-pay-44-686220.png" alt="Apple Pay" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

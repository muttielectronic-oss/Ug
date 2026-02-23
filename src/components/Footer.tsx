import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-950 text-earth-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-herbal-500 p-2 rounded-lg">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">
                Herbal Hub <span className="text-herbal-400">EA</span>
              </span>
            </Link>
            <p className="text-earth-400 text-sm leading-relaxed">
              Promoting authentic traditional African medicine and natural healing products across East Africa. Preserving our heritage for a healthier future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-earth-900 rounded-full hover:bg-herbal-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-earth-900 rounded-full hover:bg-herbal-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-earth-900 rounded-full hover:bg-herbal-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-earth-400">
              <li><Link to="/products" className="hover:text-herbal-400 transition-colors">Shop Products</Link></li>
              <li><Link to="/practitioners" className="hover:text-herbal-400 transition-colors">Find a Practitioner</Link></li>
              <li><Link to="/services" className="hover:text-herbal-400 transition-colors">Book Consultation</Link></li>
              <li><Link to="/blog" className="hover:text-herbal-400 transition-colors">Health Blog</Link></li>
              <li><Link to="/about" className="hover:text-herbal-400 transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Countries</h4>
            <ul className="space-y-4 text-sm text-earth-400">
              <li className="flex items-center gap-2"><span>🇺🇬</span> Uganda</li>
              <li className="flex items-center gap-2"><span>🇰🇪</span> Kenya</li>
              <li className="flex items-center gap-2"><span>🇸🇸</span> South Sudan</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-earth-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-herbal-400" />
                <span>+256 700 000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-herbal-400" />
                <span>info@herbalhubea.com</span>
              </li>
              <li className="pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-earth-500 mb-2">Newsletter</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-earth-900 border-none rounded-l-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-herbal-500"
                  />
                  <button className="bg-herbal-600 text-white px-4 py-2 rounded-r-lg text-sm font-bold hover:bg-herbal-500 transition-colors">
                    Join
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-earth-900 text-center text-earth-500 text-xs">
          <p>&copy; {new Date().getFullYear()} East Africa Local Medicinal & Herbal Promotion Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Practitioners from './pages/Practitioners';
import Cart from './pages/Cart';

// Placeholder pages for the rest
const About = () => (
  <div className="py-24 max-w-4xl mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8">Preserving African Traditional Medicine</h1>
    <div className="prose prose-earth max-w-none">
      <p className="text-lg text-earth-700 mb-6">
        The East Africa Local Medicinal & Herbal Promotion Hub was founded with a single mission: to bridge the gap between ancient healing wisdom and modern health needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-earth-100">
          <h3 className="text-xl font-bold mb-4 text-herbal-700">Our Mission</h3>
          <p className="text-earth-600">To preserve, promote, and verify traditional African medicine for the benefit of community health across East Africa.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-earth-100">
          <h3 className="text-xl font-bold mb-4 text-herbal-700">Our Vision</h3>
          <p className="text-earth-600">A world where natural healing is respected, accessible, and integrated into the global healthcare system.</p>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="py-24 max-w-7xl mx-auto px-4">
    <h1 className="text-4xl font-bold mb-12">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Herbal Consultation", desc: "One-on-one sessions with verified herbal doctors to discuss your health needs.", price: "From UGX 50,000" },
        { title: "Traditional Therapy", desc: "Physical healing sessions including traditional massage and bone setting.", price: "From UGX 80,000" },
        { title: "Health Workshops", desc: "Community sessions on natural wellness and growing your own medicinal herbs.", price: "Free / Donation" }
      ].map((s, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-earth-100">
          <h3 className="text-xl font-bold mb-4">{s.title}</h3>
          <p className="text-earth-600 mb-6">{s.desc}</p>
          <div className="flex justify-between items-center">
            <span className="text-herbal-700 font-bold">{s.price}</span>
            <button className="bg-herbal-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Blog = () => (
  <div className="py-24 max-w-7xl mx-auto px-4">
    <h1 className="text-4xl font-bold mb-12">Health & Wellness Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {[
        { title: "The Power of Moringa: Africa's Miracle Tree", date: "Oct 12, 2023", img: "https://picsum.photos/seed/moringa-blog/800/400" },
        { title: "Traditional Remedies for Seasonal Flu", date: "Oct 5, 2023", img: "https://picsum.photos/seed/flu-blog/800/400" }
      ].map((b, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="rounded-3xl overflow-hidden mb-6 h-64">
            <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <p className="text-herbal-600 text-sm font-bold mb-2">{b.date}</p>
          <h3 className="text-2xl font-bold group-hover:text-herbal-700 transition-colors">{b.title}</h3>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="py-24 max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        <p className="text-earth-600 mb-12">Have questions about our products or need help finding a practitioner? Our team is here to help.</p>
        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-earth-950 mb-2">Uganda Office</h4>
            <p className="text-earth-600">Plot 12, Kampala Road, Kampala</p>
            <p className="text-herbal-600 font-bold">+256 700 000000</p>
          </div>
          <div>
            <h4 className="font-bold text-earth-950 mb-2">Kenya Office</h4>
            <p className="text-earth-600">Westlands Commercial Center, Nairobi</p>
            <p className="text-herbal-600 font-bold">+254 700 000000</p>
          </div>
          <div>
            <h4 className="font-bold text-earth-950 mb-2">South Sudan Office</h4>
            <p className="text-earth-600">Airport Road, Juba</p>
            <p className="text-herbal-600 font-bold">+211 900 000000</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-earth-100">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-earth-700">First Name</label>
              <input type="text" className="w-full bg-earth-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-herbal-500" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-earth-700">Last Name</label>
              <input type="text" className="w-full bg-earth-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-herbal-500" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-earth-700">Email Address</label>
            <input type="email" className="w-full bg-earth-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-herbal-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-earth-700">Message</label>
            <textarea rows={4} className="w-full bg-earth-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-herbal-500"></textarea>
          </div>
          <button className="w-full bg-herbal-600 text-white py-4 rounded-xl font-bold hover:bg-herbal-500 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/practitioners" element={<Practitioners />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

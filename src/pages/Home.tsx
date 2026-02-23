import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, ShieldCheck, Users, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/herbs/1920/1080?blur=2"
            alt="Herbal Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-950/90 via-earth-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-herbal-600/20 backdrop-blur-sm border border-herbal-500/30 text-herbal-300 rounded-full text-sm font-bold mb-6">
              Preserving African Heritage
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Natural Healing for <span className="text-herbal-400">East Africa</span>
            </h1>
            <p className="text-xl text-earth-200 mb-10 leading-relaxed">
              Connecting you with authentic herbal remedies and verified practitioners from Uganda, Kenya, and South Sudan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-herbal-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-herbal-500 transition-all shadow-lg shadow-herbal-900/20"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Herbal Products
              </Link>
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 african-pattern -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-earth-950 mb-4">Why Choose Traditional Healing?</h2>
            <p className="text-earth-600">Our ancestors thrived on the wisdom of the land. We bring that verified knowledge to the modern world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-herbal-600" />,
                title: "Verified Authenticity",
                desc: "Every product and practitioner on our platform undergoes a rigorous verification process."
              },
              {
                icon: <Users className="w-8 h-8 text-herbal-600" />,
                title: "Community Focused",
                desc: "We support local farmers and traditional healers across East Africa, ensuring fair trade."
              },
              {
                icon: <HeartPulse className="w-8 h-8 text-herbal-600" />,
                title: "Holistic Wellness",
                desc: "Our remedies treat the root cause, focusing on long-term health and spiritual balance."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-earth-50 border border-earth-100 hover:border-herbal-200 transition-all"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-earth-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Countries */}
      <section className="py-24 bg-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-earth-950 mb-4">Regional Specialties</h2>
              <p className="text-earth-600">Discover unique healing traditions from across our borders.</p>
            </div>
            <Link to="/products" className="text-herbal-600 font-bold flex items-center gap-2 hover:underline">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Uganda", flag: "🇺🇬", specialty: "Shea Butter & Moringa", img: "https://picsum.photos/seed/uganda/600/400" },
              { name: "Kenya", flag: "🇰🇪", specialty: "Neem & Coastal Herbs", img: "https://picsum.photos/seed/kenya/600/400" },
              { name: "South Sudan", flag: "🇸🇸", specialty: "Hibiscus & Desert Roots", img: "https://picsum.photos/seed/sudan/600/400" }
            ].map((country, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden h-80 shadow-lg">
                <img
                  src={country.img}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{country.flag}</span>
                    <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                  </div>
                  <p className="text-earth-300 text-sm">{country.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-herbal-900 relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to start your natural healing journey?</h2>
          <p className="text-herbal-200 text-xl mb-12">Join thousands of East Africans who have embraced the power of traditional medicine.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/practitioners" className="bg-white text-herbal-900 px-8 py-4 rounded-xl font-bold hover:bg-earth-100 transition-all">
              Find a Practitioner
            </Link>
            <Link to="/contact" className="bg-herbal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-herbal-500 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

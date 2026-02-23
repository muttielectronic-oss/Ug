import React, { useEffect, useState } from 'react';
import { Practitioner } from '../types';
import { MapPin, Star, ShieldCheck, Phone, Calendar, Search } from 'lucide-react';
import { motion } from 'motion/react';

const Practitioners = () => {
  const [practitioners, setPractitioners] = useState<Practitioner[]>([]);
  const [loading, setLoading] = useState(true);
  const [countryFilter, setCountryFilter] = useState('All');

  useEffect(() => {
    fetch('/api/practitioners')
      .then(res => res.json())
      .then(data => {
        setPractitioners(data);
        setLoading(false);
      });
  }, []);

  const filtered = practitioners.filter(p => countryFilter === 'All' || p.country === countryFilter);

  return (
    <div className="min-h-screen py-12 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-earth-950 mb-4">Verified Practitioners</h1>
            <p className="text-earth-600">Connect with trusted local herbal doctors and traditional healers.</p>
          </div>
          <div className="flex gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-earth-200">
            {['All', 'Uganda', 'Kenya', 'South Sudan'].map(c => (
              <button
                key={c}
                onClick={() => setCountryFilter(c)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  countryFilter === c ? 'bg-herbal-600 text-white shadow-md' : 'text-earth-600 hover:bg-earth-50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            [1, 2, 3].map(i => <div key={i} className="h-64 bg-earth-200 animate-pulse rounded-3xl"></div>)
          ) : (
            filtered.map(p => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={p.id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-earth-100 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-earth-100 rounded-2xl flex items-center justify-center text-2xl">
                    {p.country === 'Uganda' ? '🇺🇬' : p.country === 'Kenya' ? '🇰🇪' : '🇸🇸'}
                  </div>
                  {p.verified === 1 && (
                    <div className="flex items-center gap-1 bg-herbal-50 text-herbal-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-herbal-100">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-earth-950 mb-1">{p.name}</h3>
                <p className="text-herbal-600 font-medium text-sm mb-4">{p.specialty}</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-earth-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    {p.location}, {p.country}
                  </div>
                  <div className="flex items-center gap-2 text-earth-500 text-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {p.rating} / 5.0 Rating
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`tel:${p.contact}`}
                    className="flex-1 bg-earth-100 text-earth-900 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-earth-200 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <button className="flex-1 bg-herbal-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-herbal-500 transition-colors">
                    <Calendar className="w-4 h-4" />
                    Book
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Practitioners;

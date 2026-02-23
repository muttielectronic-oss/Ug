import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { useAppContext } from '../AppContext';
import { ShoppingCart, Filter, Search, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const { addToCart, formatPrice } = useAppContext();

  const categories = [
    'All',
    'Herbal Teas',
    'Immune Boosters',
    'Natural Oils',
    'Skin & Hair Remedies',
    'Fertility & Women’s Health',
    'Energy & Wellness Supplements'
  ];

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                         p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-earth-950 mb-4">Our Herbal Pharmacy</h1>
          <p className="text-earth-600">Authentic remedies sourced directly from local producers.</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-earth-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for herbs, remedies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-herbal-500"
            />
          </div>
          <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
            <Filter className="text-earth-400 w-5 h-5 shrink-0" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  filter === cat 
                    ? 'bg-herbal-600 text-white shadow-md' 
                    : 'bg-white text-earth-800 hover:bg-earth-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-96 bg-earth-200 animate-pulse rounded-3xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map(product => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={product.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-earth-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-herbal-700 border border-herbal-100">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-earth-950 mb-2">{product.name}</h3>
                    <p className="text-earth-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-2 mb-6">
                      <CheckCircle2 className="w-4 h-4 text-herbal-500" />
                      <span className="text-xs font-medium text-herbal-700">Verified Authentic</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-herbal-900">{formatPrice(product)}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="p-3 bg-herbal-600 text-white rounded-xl hover:bg-herbal-500 transition-colors shadow-lg shadow-herbal-900/10"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-earth-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

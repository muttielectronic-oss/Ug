import React from 'react';
import { useAppContext } from '../AppContext';
import { Trash2, ShoppingBag, CreditCard, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, formatPrice, currency } = useAppContext();

  const total = cart.reduce((acc, item) => {
    switch (currency) {
      case 'UGX': return acc + (item.price_ugx * item.quantity);
      case 'SSP': return acc + (item.price_ssp * item.quantity);
      case 'KES': return acc + (item.price_kes * item.quantity);
      default: return acc;
    }
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-center items-center justify-center flex-col px-4 text-center">
        <div className="bg-earth-100 p-8 rounded-full mb-8">
          <ShoppingBag className="w-16 h-16 text-earth-400" />
        </div>
        <h2 className="text-3xl font-bold text-earth-950 mb-4">Your cart is empty</h2>
        <p className="text-earth-600 mb-8">Looks like you haven't added any herbal remedies yet.</p>
        <Link to="/products" className="bg-herbal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-herbal-500 transition-all">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-earth-950 mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-3xl p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm border border-earth-100">
                <img src={item.image_url} alt={item.name} className="w-24 h-24 rounded-2xl object-cover" />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-earth-950">{item.name}</h3>
                  <p className="text-earth-500 text-sm mb-2">{item.category}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <span className="text-herbal-900 font-bold">{formatPrice(item)}</span>
                    <span className="text-earth-400 text-sm">Qty: {item.quantity}</span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-earth-100">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-earth-600">
                  <span>Subtotal</span>
                  <span>{currency} {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-earth-600">
                  <span>Delivery</span>
                  <span>Calculated at next step</span>
                </div>
                <div className="pt-4 border-t border-earth-100 flex justify-between text-xl font-bold text-earth-950">
                  <span>Total</span>
                  <span>{currency} {total.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold text-earth-400 uppercase tracking-widest">Payment Methods</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-earth-50 p-3 rounded-xl flex flex-col items-center gap-2 border border-earth-100">
                    <Smartphone className="w-5 h-5 text-herbal-600" />
                    <span className="text-[10px] font-bold">Mobile Money</span>
                  </div>
                  <div className="bg-earth-50 p-3 rounded-xl flex flex-col items-center gap-2 border border-earth-100">
                    <CreditCard className="w-5 h-5 text-earth-600" />
                    <span className="text-[10px] font-bold">Card Payment</span>
                  </div>
                </div>
                <button className="w-full bg-herbal-600 text-white py-4 rounded-xl font-bold hover:bg-herbal-500 transition-all shadow-lg shadow-herbal-900/10">
                  Proceed to Checkout
                </button>
              </div>
            </div>

            <div className="bg-herbal-50 rounded-3xl p-6 border border-herbal-100">
              <p className="text-herbal-800 text-sm font-medium leading-relaxed">
                ✨ Your purchase supports local herbalists and preserves traditional healing knowledge in East Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

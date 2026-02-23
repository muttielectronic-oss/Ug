import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency, CartItem, Product } from './types';

interface AppContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  cart: CartItem[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  formatPrice: (p: Product) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('UGX');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const formatPrice = (p: Product) => {
    switch (currency) {
      case 'UGX': return `UGX ${p.price_ugx.toLocaleString()}`;
      case 'SSP': return `SSP ${p.price_ssp.toLocaleString()}`;
      case 'KES': return `KES ${p.price_kes.toLocaleString()}`;
      default: return '';
    }
  };

  return (
    <AppContext.Provider value={{ currency, setCurrency, cart, addToCart, removeFromCart, clearCart, formatPrice }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  benefits: string;
  price_ugx: number;
  price_ssp: number;
  price_kes: number;
  image_url: string;
}

export interface Practitioner {
  id: number;
  name: string;
  specialty: string;
  country: string;
  location: string;
  contact: string;
  rating: number;
  verified: number;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image_url: string;
}

export type Currency = 'UGX' | 'SSP' | 'KES';

export interface CartItem extends Product {
  quantity: number;
}

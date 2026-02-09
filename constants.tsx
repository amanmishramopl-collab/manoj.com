
import { CategoryType, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Eternal Solitaire Ring',
    category: CategoryType.RINGS,
    price: '₹85,000',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    description: 'A classic 24k gold band with a brilliant cut diamond centerpiece.'
  },
  {
    id: '2',
    name: 'Majestic Gold Choker',
    category: CategoryType.NECKLACES,
    price: '₹2,45,000',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    description: 'Intricately handcrafted traditional gold choker with floral motifs.'
  },
  {
    id: '3',
    name: 'Royal Emerald Earrings',
    category: CategoryType.EARRINGS,
    price: '₹1,20,000',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
    description: 'Deep green emeralds teardrops set in yellow gold filigree.'
  },
  {
    id: '4',
    name: 'Divine Gold Kada',
    category: CategoryType.BRACELETS,
    price: '₹1,75,000',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe157a8?auto=format&fit=crop&q=80&w=800',
    description: 'Traditional heavy gold bracelet with detailed craftsmanship.'
  },
  {
    id: '5',
    name: 'Infinity Love Necklace',
    category: CategoryType.NECKLACES,
    price: '₹95,000',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    description: 'Modern gold chain with a delicate infinity pendant studded with small diamonds.'
  },
  {
    id: '6',
    name: 'Antique Peacock Jhumka',
    category: CategoryType.EARRINGS,
    price: '₹1,10,000',
    image: 'https://images.unsplash.com/photo-1630019019621-04382939b71b?auto=format&fit=crop&q=80&w=800',
    description: 'Vintage-style peacock design earrings in 22k gold.'
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Collections', href: '#collections' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

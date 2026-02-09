
export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  price: string;
  image: string;
  description: string;
}

export enum CategoryType {
  RINGS = 'Rings',
  NECKLACES = 'Necklaces',
  EARRINGS = 'Earrings',
  BRACELETS = 'Bracelets',
  COLLECTIONS = 'Collections'
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

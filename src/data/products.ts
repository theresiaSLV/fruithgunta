
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Apples',
    description: 'Sweet and crisp apples, perfect for snacking or baking.',
    price: 1.99,
    image: '/fruits/apple.jpg', 
    category: 'berries',
    stock: 150,
    featured: true,
  },
  {
    id: '2',
    name: 'Organic Bananas',
    description: 'Perfectly ripened organic bananas. Rich in potassium and natural sugars.',
    price: 0.89,
    image: '/fruits/banana.jpg',
    category: 'tropical',
    stock: 200,
  },
  {
    id: '3',
    name: 'Juicy Oranges',
    description: 'Sweet and tangy oranges, packed with vitamin C.',
    price: 1.25,
    image: '/fruits/orange.jpg',
    category: 'citrus',
    stock: 120,
    featured: true,
  },
  {
    id: '4',
    name: 'Ripe Strawberries',
    description: 'Sweet and juicy strawberries, freshly picked.',
    price: 3.49,
    image: '/fruits/strawberry.jpg',
    category: 'berries',
    stock: 80,
    featured: true,
  },
  {
    id: '5',
    name: 'Dragon Fruit',
    description: 'Exotic dragon fruit with a mild sweet taste and kiwi-like texture.',
    price: 4.99,
    image: '/fruits/dragonfruit.jpg',
    category: 'exotic',
    stock: 40,
  },
  {
    id: '6',
    name: 'Fresh Blueberries',
    description: 'Sweet and tangy blueberries, rich in antioxidants.',
    price: 4.29,
    image: '/fruits/blueberry.jpg',
    category: 'berries',
    stock: 60,
  },
  {
    id: '7',
    name: 'Ripe Mangoes',
    description: 'Sweet and aromatic mangoes, perfect for desserts and smoothies.',
    price: 2.50,
    image: '/fruits/mango.jpg',
    category: 'tropical',
    stock: 70,
    featured: true,
  },
  {
    id: '8',
    name: 'Fresh Lemons',
    description: 'Tangy lemons, perfect for cooking, baking, or making lemonade.',
    price: 0.79,
    image: '/fruits/lemon.jpg',
    category: 'citrus',
    stock: 100,
  },
  {
    id: '9',
    name: 'Kiwi Fruit',
    description: 'Tangy-sweet kiwi fruits, packed with vitamin C and fiber.',
    price: 1.50,
    image: '/fruits/kiwi.jpg',
    category: 'exotic',
    stock: 90,
  },
  {
    id: '10',
    name: 'Premium Pineapples',
    description: 'Sweet and juicy pineapples, perfectly ripened.',
    price: 3.99,
    image: '/fruits/pineapple.jpg',
    category: 'tropical',
    stock: 50,
    featured: true,
  },
  {
    id: '11',
    name: 'Fresh Limes',
    description: 'Zesty limes, perfect for cocktails and cooking.',
    price: 0.69,
    image: '/fruits/lime.jpg',
    category: 'citrus',
    stock: 110,
  },
  {
    id: '12',
    name: 'Pomegranates',
    description: 'Sweet and tart pomegranates, full of juicy seeds and antioxidants.',
    price: 2.99,
    image: '/fruits/pomegranate.jpg',
    category: 'exotic',
    stock: 45,
  }
];

// Helper function to get products by category
export function getProductsByCategory(category: string) {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
}

// Helper function to get featured products
export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

// Helper function to get product by id
export function getProductById(id: string) {
  return products.find(product => product.id === id);
}

// Helper function to search products
export function searchProducts(query: string) {
  const lowerCaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerCaseQuery) || 
    product.description.toLowerCase().includes(lowerCaseQuery)
  );
}

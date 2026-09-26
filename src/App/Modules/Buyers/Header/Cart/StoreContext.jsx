import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext();

// ======================== Mock Catalog ========================
export const MOCK_PRODUCTS = [
  // Fruits
  { _id: "p1",  name: "Hass Avocado",       price: 120, unit: "kg",     seller: "Kiambu Fresh Farms",     rating: 4.9, stock: 240, category: "Fruits",            location: "Kiambu",      image: "🥑", tag: "Top Rated" },
  { _id: "p2",  name: "Sweet Bananas",      price: 60,  unit: "bunch",  seller: "Meru Banana Growers",    rating: 4.7, stock: 180, category: "Fruits",            location: "Meru",        image: "🍌", tag: null },
  { _id: "p3",  name: "Ripe Mangoes",       price: 90,  unit: "kg",     seller: "Kilifi Tropical Farm",   rating: 4.8, stock: 150, category: "Fruits",            location: "Kilifi",      image: "🥭", tag: "Seasonal" },
  { _id: "p4",  name: "Passion Fruit",      price: 140, unit: "kg",     seller: "Kisii Fruit Collective", rating: 4.9, stock: 120, category: "Fruits",            location: "Kisii",       image: "🍈", tag: "Fresh Today" },
  { _id: "p5",  name: "Sweet Pineapple",    price: 100, unit: "piece",  seller: "Thika Pineapple Hub",    rating: 4.7, stock: 200, category: "Fruits",            location: "Thika",       image: "🍍", tag: null },

  // Vegetables
  { _id: "p6",  name: "Red Tomatoes",       price: 85,  unit: "kg",     seller: "Nakuru Green Growers",   rating: 4.7, stock: 180, category: "Vegetables",        location: "Nakuru",      image: "🍅", tag: "Fresh" },
  { _id: "p7",  name: "Sukuma Wiki",        price: 40,  unit: "bunch",  seller: "Limuru Family Farm",     rating: 4.9, stock: 320, category: "Vegetables",        location: "Limuru",      image: "🥬", tag: null },
  { _id: "p8",  name: "Red Onions",         price: 95,  unit: "kg",     seller: "Kajiado Dryland Farms",  rating: 4.5, stock: 260, category: "Vegetables",        location: "Kajiado",     image: "🧅", tag: null },
  { _id: "p9",  name: "Irish Potatoes",     price: 60,  unit: "kg",     seller: "Nyandarua Highlands",    rating: 4.6, stock: 400, category: "Vegetables",        location: "Nyandarua",   image: "🥔", tag: "Bulk Deal" },
  { _id: "p10", name: "Green Bell Peppers", price: 130, unit: "kg",     seller: "Naivasha Greenhouses",   rating: 4.6, stock: 95,  category: "Vegetables",        location: "Naivasha",    image: "🫑", tag: null },

  // Grains
  { _id: "p11", name: "Dry Maize",          price: 45,  unit: "kg",     seller: "Kitale Grain Hub",       rating: 4.8, stock: 500, category: "Grains & Cereals",  location: "Kitale",      image: "🌽", tag: "Best Seller" },
  { _id: "p12", name: "Wheat Grain",        price: 55,  unit: "kg",     seller: "Narok Wheat Growers",    rating: 4.6, stock: 320, category: "Grains & Cereals",  location: "Narok",       image: "🌾", tag: null },
  { _id: "p13", name: "Rice (Pishori)",     price: 180, unit: "kg",     seller: "Mwea Rice Millers",      rating: 4.9, stock: 210, category: "Grains & Cereals",  location: "Mwea",        image: "🍚", tag: "Premium" },

  // Dairy
  { _id: "p14", name: "Fresh Milk",         price: 60,  unit: "litre",  seller: "Kiambu Dairy Co-op",     rating: 4.7, stock: 400, category: "Dairy",             location: "Kiambu",      image: "🥛", tag: null },
  { _id: "p15", name: "Cheddar Cheese",     price: 950, unit: "kg",     seller: "Rift Valley Creamery",   rating: 4.8, stock: 60,  category: "Dairy",             location: "Eldoret",     image: "🧀", tag: null },
  { _id: "p16", name: "Farm Eggs (Tray)",   price: 350, unit: "tray",   seller: "Limuru Poultry Farms",   rating: 4.8, stock: 150, category: "Dairy",             location: "Limuru",      image: "🥚", tag: "Top Rated" },

  // Livestock
  { _id: "p17", name: "Dairy Meal (50kg)",  price: 2200, unit: "bag",   seller: "Eldoret Feeds Ltd",      rating: 4.6, stock: 75,  category: "Livestock",         location: "Eldoret",     image: "🌾", tag: "Best Seller" },
  { _id: "p18", name: "Poultry Feed",       price: 1800, unit: "bag",   seller: "Thika Feed Mill",        rating: 4.7, stock: 120, category: "Livestock",         location: "Thika",       image: "🐔", tag: null },

  // Seeds
  { _id: "p19", name: "Hybrid Maize Seeds", price: 380, unit: "kg",     seller: "Kenya Seed Co.",         rating: 4.9, stock: 200, category: "Seeds",             location: "Kitale",      image: "🌱", tag: "Certified" },
  { _id: "p20", name: "Tomato Seedlings",   price: 15,  unit: "seedling", seller: "Nakuru Nurseries",     rating: 4.7, stock: 1200, category: "Seeds",            location: "Nakuru",      image: "🌱", tag: null },

  // Fertilizers
  { _id: "p21", name: "DAP Fertilizer",     price: 3200, unit: "50kg",  seller: "Yara Kenya",             rating: 4.8, stock: 180, category: "Fertilizers",       location: "Nairobi",     image: "🧪", tag: "Bulk Deal" },
  { _id: "p22", name: "Organic Compost",    price: 850, unit: "50kg",   seller: "Organic Growers Hub",    rating: 4.6, stock: 220, category: "Fertilizers",       location: "Kiambu",      image: "🧪", tag: null },

  // Farm Tools
  { _id: "p23", name: "Jembe (Hoe)",        price: 650, unit: "piece",  seller: "Nairobi Hardware",       rating: 4.5, stock: 90,  category: "Farm Tools",        location: "Nairobi",     image: "🛠️", tag: null },
  { _id: "p24", name: "Knapsack Sprayer",   price: 2500, unit: "piece", seller: "FarmCare Supplies",      rating: 4.7, stock: 45,  category: "Farm Tools",        location: "Nairobi",     image: "🛠️", tag: null },

  // Others
  { _id: "p25", name: "Organic Honey",      price: 850, unit: "500ml",  seller: "Baringo Bee Keepers",    rating: 5.0, stock: 60,  category: "Others",            location: "Baringo",     image: "🍯", tag: "Premium" },
];

// ======================== Provider ========================
export const StoreContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(true);

  // Simulate initial load
  useEffect(() => {
    const t = setTimeout(() => {
      setProducts(MOCK_PRODUCTS);
      setLoading(false);
    }, 200);
    return () => clearTimeout(t);
  }, []);

  // ---- Cart operations ----
  const addToCart = (productId, qty = 1) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + qty,
    }));
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const next = { ...prev };
      if (!next[productId]) return next;
      if (next[productId] > 1) next[productId] -= 1;
      else delete next[productId];
      return next;
    });
  };

  const setQty = (productId, qty) => {
    setCartItems((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[productId];
      else next[productId] = qty;
      return next;
    });
  };

  const clearCart = () => setCartItems({});

  const getCartCount = () =>
    Object.values(cartItems).reduce((sum, q) => sum + q, 0);

  const getCartTotal = () =>
    Object.entries(cartItems).reduce((sum, [id, qty]) => {
      const product = products.find((p) => p._id === id);
      return sum + (product ? product.price * qty : 0);
    }, 0);

  const isInCart = (productId) => Boolean(cartItems[productId]);

  const value = {
    products,
    loading,
    cartItems,
    addToCart,
    removeFromCart,
    setQty,
    clearCart,
    getCartCount,
    getCartTotal,
    isInCart,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreContextProvider");
  return ctx;
};

export default StoreContextProvider;
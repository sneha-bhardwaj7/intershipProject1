export const bestsellers = [
  {
    id: 1,
    name: "Premium Banana Chips",
    benefits: "Rich in Potassium & Fiber",
    weight: "100 g",
    price: "₹100.00",
    originalPrice: "₹120.00",
    rating: 5,
    category: "banana-chips",
    isBestseller: true,
  },
  {
    id: 10,
    name: "Mango Pickle",
    benefits: "Rich in Vitamin C",
    weight: "250 g",
    price: "₹150.00",
    originalPrice: "₹180.00",
    rating: 5,
    category: "pickles",
    isBestseller: true,
  },
  {
    id: 3,
    name: "Organic Banana Chips",
    benefits: "100% Organic & Fresh",
    weight: "200 g",
    price: "₹200.00",
    originalPrice: "₹240.00",
    rating: 5,
    category: "banana-chips",
    isBestseller: true,
  },
  {
    id: 12,
    name: "Lemon Pickle",
    benefits: "Tangy & Refreshing",
    weight: "200 g",
    price: "₹120.00",
    originalPrice: "₹150.00",
    rating: 5,
    category: "pickles",
    isBestseller: true,
  },
]

export const getBestsellers = () => {
  return bestsellers
}

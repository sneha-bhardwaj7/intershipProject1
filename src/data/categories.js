export const categories = [
  {
    id: "banana-chips",
    name: "banana-chips",
    displayName: "BANANA CHIPS",
    description: "Crispy, delicious banana chips made from real bananas",
    heroTitle: "Banana\nChips",
    heroSubtitle: "Crispy, delicious banana chips\nmade from real bananas",
    bgGradient: "bg-gradient-to-r from-yellow-200 to-yellow-300",
  },
  {
    id: "pickles",
    name: "pickles",
    displayName: "PICKLES",
    description: "Tangy and spicy pickles, perfect to complement your meals",
    heroTitle: "Pickles",
    heroSubtitle: "Tangy and spicy pickles,\nperfect to complement your meals.",
    bgGradient: "bg-gradient-to-r from-orange-100 to-yellow-100",
  },
]

export const getCategoryById = (id) => {
  return categories.find((category) => category.id === id)
}

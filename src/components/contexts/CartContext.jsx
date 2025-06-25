"use client"

import { createContext, useContext, useReducer, useEffect } from "react"

// localStorage helper functions
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      return JSON.parse(savedCart)
    }
  } catch (error) {
    console.error("Error loading cart from localStorage:", error)
  }
  return {
    items: [],
    totalItems: 0,
    totalAmount: 0,
  }
}

const saveCartToStorage = (cartState) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cartState))
  } catch (error) {
    console.error("Error saving cart to localStorage:", error)
  }
}

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + action.payload.price,
        }
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + action.payload.price,
        }
      }

    case "REMOVE_FROM_CART":
      const itemToRemove = state.items.find((item) => item.id === action.payload)
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalAmount: state.totalAmount - itemToRemove.price * itemToRemove.quantity,
      }

    case "UPDATE_QUANTITY":
      const item = state.items.find((item) => item.id === action.payload.id)
      const quantityDiff = action.payload.quantity - item.quantity

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
        ),
        totalItems: state.totalItems + quantityDiff,
        totalAmount: state.totalAmount + item.price * quantityDiff,
      }

    case "CLEAR_CART":
      return {
        items: [],
        totalItems: 0,
        totalAmount: 0,
      }

    default:
      return state
  }
}

const initialState = loadCartFromStorage()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Save to localStorage whenever cart state changes
  useEffect(() => {
    saveCartToStorage(state)
  }, [state])

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } })
    }
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

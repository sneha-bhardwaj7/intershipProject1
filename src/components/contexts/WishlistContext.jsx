"use client"

import { createContext, useContext, useReducer, useEffect } from "react"

// localStorage helper functions
const loadWishlistFromStorage = () => {
  try {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      return JSON.parse(savedWishlist)
    }
  } catch (error) {
    console.error("Error loading wishlist from localStorage:", error)
  }
  return {
    items: [],
    totalItems: 0,
  }
}

const saveWishlistToStorage = (wishlistState) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(wishlistState))
  } catch (error) {
    console.error("Error saving wishlist to localStorage:", error)
  }
}

const WishlistContext = createContext()

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        return state // Item already in wishlist
      }

      return {
        ...state,
        items: [...state.items, action.payload],
        totalItems: state.totalItems + 1,
      }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - 1,
      }

    case "CLEAR_WISHLIST":
      return {
        items: [],
        totalItems: 0,
      }

    default:
      return state
  }
}

const initialState = loadWishlistFromStorage()

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState)

  // Save to localStorage whenever wishlist state changes
  useEffect(() => {
    saveWishlistToStorage(state)
  }, [state])

  const addToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product })
  }

  const removeFromWishlist = (productId) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId })
  }

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" })
  }

  const isInWishlist = (productId) => {
    return state.items.some((item) => item.id === productId)
  }

  return (
    <WishlistContext.Provider
      value={{
        state,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

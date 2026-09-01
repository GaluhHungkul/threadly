// stores/cart.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  color?: string;
  size?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];

  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string, size?: string, color?: string) => void;
  increaseQuantity: (id: string, size?: string, color?: string) => void;
  decreaseQuantity: (id: string, size?: string, color?: string) => void;
  clearCart: () => void;

  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (cartItem) =>
              cartItem.id === item.id &&
              cartItem.size === item.size &&
              cartItem.color === item.color
          );

          if (existingItem) {
            return {
              items: state.items.map((cartItem) =>
                cartItem.id === item.id &&
                cartItem.size === item.size &&
                cartItem.color === item.color
                  ? {
                      ...cartItem,
                      quantity: cartItem.quantity + 1,
                    }
                  : cartItem
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                ...item,
                quantity: 1,
              },
            ],
          };
        }),

      removeItem: (id, size, color) =>
        set((state) => ({
          items: state.items.filter(
            (item) => 
              !(
                item.id === id &&
                item.size === size &&
                item.color === color
              )
            
          ),
        })),

      increaseQuantity: (id, size, color) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id &&
            item.size === size &&
            item.color === color
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        })),

      decreaseQuantity: (id, size, color) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id &&
              item.size === size &&
              item.color === color
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCart: () => set({ items: [] }),

      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      getTotalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
    }),
    {
      name: "threadly-cart",
    }
  )
);
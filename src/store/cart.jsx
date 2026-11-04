import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      toggleCart: (product) => {
        if (!product) return;
        const currentCart = get().cart;
        const itemExists = currentCart.some((item) => item.id === product.id);

        set({
          cart: itemExists
            ? currentCart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              )
            : [...currentCart, { ...product, quantity: 1 }],
        });
      },
      removeItem: (id) => {
        const currentCart = get().cart;
        set({ cart: currentCart.filter((item) => item.id !== id) });
      },
      decrease: (id) => {
        const currentCart = get().cart;

        set({
          cart: currentCart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        });
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useStore;

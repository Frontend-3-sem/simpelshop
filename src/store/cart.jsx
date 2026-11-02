import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      toggleCart: (product) => {
        console.log("Product:", product);
        const currentCart = get().cart;
        const itemExists = currentCart.some((item) => item.id === product.id);

        set({
          cart: itemExists
            ? currentCart.filter((item) => item.id !== product.id)
            : [...currentCart, product],
        });
        console.log("Updated favorites:", get().cart);
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useStore;

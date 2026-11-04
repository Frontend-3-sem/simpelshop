import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      favourites: [],
      toggleFavourite: (id) => {
        const currentFavourites = get().favourites;

        const exists = currentFavourites.includes(id);
        set({
          favourites: exists
            ? currentFavourites.filter((favourite) => favourite !== id)
            : [...currentFavourites, id],
        });
      },
    }),
    { name: "favorite-storage" },
  ),
);

export default useStore;

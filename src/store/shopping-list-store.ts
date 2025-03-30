import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface ShoppingListItem {
  id: string;
  name: string;
  isPurchased: boolean;
  quantity: number;
  category: string;
}

interface ShoppingListState {
  currentCategory: string;
  items: ShoppingListItem[];
  addShoppingItem: (name: string, category: string, quantity: number) => void;
  updateShoppingItem: (item: ShoppingListItem) => void;
  removeShoppingItem: (id: string) => void;
  getByCurrentCategory: () => ShoppingListItem[];
  getById: (id: string) => ShoppingListItem | undefined;
  setCurrentCategory: (value: string) => void;
}

export const useShoppingListStore = create<ShoppingListState>()((set, get) => ({
  currentCategory: "",
  items: [],

  addShoppingItem: (name, category, quantity) => {
    const item: ShoppingListItem = {
      id: uuidv4(),
      name: name,
      isPurchased: false,
      quantity: quantity,
      category: category,
    };
    set((state) => ({
      items: [...state.items, item],
    }));
  },

  updateShoppingItem: (updated) => {
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === updated.id) {
          return updated;
        }
        return item;
      }),
    }));
  },

  removeShoppingItem: (id: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  setCurrentCategory: (value) => {
    set(() => ({
      currentCategory: value,
    }));
  },

  getById: (id: string) => {
    return get().items.find((item) => item.id === id);
  },

  getByCurrentCategory: () => {
    const state = get();

    if (state.currentCategory === "") {
      return state.items;
    }

    return state.items.filter(
      (item) => item.category === state.currentCategory
    );
  },
}));

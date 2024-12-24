import { create } from "zustand";

export const menuOpen = create((set) => ({
  menus: false,

  updateOpen: () => set((state) => ({ menus: !state.menus })),
}));

import { create } from "zustand";

export const authStore = create((set) => ({
  user: {},
  token: "",

  addUser: (user, token) => set(() => ({ user, token })),
  removeUser: () => set({ user: {}, token: "" }),
  updateUser: (updatedUser, updatedToken) =>
    set((state) => ({
      user: { ...state.user, ...updatedUser },
      token: updatedToken || state.token,
    })),
}));

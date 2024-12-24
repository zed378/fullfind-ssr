import { create } from "zustand";

export const submittedForm = create((set) => ({
  isSubmit: false,

  updateSubmit: (val) => set({ isSubmit: val }),
}));

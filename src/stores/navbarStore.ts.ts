import { create } from 'zustand';

type NavbarState = {
  expand: boolean;
  toggleExpand: () => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  expand: false,
  toggleExpand: () => set((state) => ({ expand: !state.expand }))
}));

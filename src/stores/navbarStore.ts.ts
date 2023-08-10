import { create } from 'zustand';

type NavbarState = {
  expand: boolean;
  toggleExpand: () => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  expand: true,
  toggleExpand: () => set((state) => ({ expand: !state.expand }))
}));

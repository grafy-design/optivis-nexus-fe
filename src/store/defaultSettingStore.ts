import { create } from "zustand";

export type DefaultSettingId =
  | "patient-disease-info"
  | "filter"
  | "high-risk-subgroup"
  | "medical-history";

export interface DefaultSettingState {
  completedItems: Record<DefaultSettingId, boolean>;
  setCompleted: (id: DefaultSettingId, completed: boolean) => void;
  isAllCompleted: () => boolean;
  isAnyCompleted: () => boolean;
  reset: () => void;
}

const initialCompleted: Record<DefaultSettingId, boolean> = {
  "patient-disease-info": false,
  "filter": false,
  "high-risk-subgroup": false,
  "medical-history": false,
};

export const useDefaultSettingStore = create<DefaultSettingState>((set, get) => ({
  completedItems: { ...initialCompleted },

  setCompleted: (id, completed) =>
    set((state) => ({
      completedItems: { ...state.completedItems, [id]: completed },
    })),

  isAllCompleted: () =>
    Object.values(get().completedItems).every(Boolean),

  isAnyCompleted: () =>
    Object.values(get().completedItems).some(Boolean),

  reset: () => set({ completedItems: { ...initialCompleted } }),
}));

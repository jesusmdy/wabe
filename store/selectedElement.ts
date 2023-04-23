import { create } from "zustand";

interface SelectedElementInterface {
    selectedElement: string | null;
    setSelectedElement: (element: string | null) => void;
};

const selectedElementStore = create<SelectedElementInterface>(
    (set) => (
        {
            selectedElement: null,
            setSelectedElement: (element) => set({ selectedElement: element }),
        }
    )
);

export {selectedElementStore};

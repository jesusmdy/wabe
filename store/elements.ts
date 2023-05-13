import { Element } from "@/types/element";
import { create } from "zustand";

interface ElementStore {
    elements: Element[];
    setElements: (elements: Element[]) => void;
    addElement: (element: Element) => void;
    updateElement: (element: Element) => void;
}

const elementsStore = create<ElementStore>(
    (set) => (
        {
            elements: [] as Element[],
            setElements: (elements) => set({ elements }),
            addElement: (element) => set((state) => ({ elements: [...state.elements, element] })),
            updateElement: (element) => set((state) => ({ elements: state.elements.map((e) => e.id === element.id ? element : e) })),
        }
    )
);

export {elementsStore};

'use client'
import { IElementCreatorProps } from "@/interface/element/creatorTemplate";
import { elementsStore } from "@/store/elements";
import { generateUID } from "@/utils/generators";
import { FC, createElement } from "react";

const ElementCreator: FC<IElementCreatorProps> = ({ type, label }) => {

    const addElement = elementsStore((state) => state.addElement);
    const elements = elementsStore((state) => state.elements);

    const onClick = () => {
        const id = generateUID();
        const element = createElement(
            type,
            {},
            `This is a ${type} element`
        );
        addElement({
            ...element,
            id,
            type,
            name: `${type}-${elements.length + 1}`
        });
    };

    return (
        <button
            onClick={onClick}
            className="bg-zinc-600 text-sm px-4 py-2 rounded-md text-zinc-100 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50"
        >
            {label}
        </button>
    );
};

export default ElementCreator;

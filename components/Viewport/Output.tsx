'use client'
import { elementsStore } from "@/store/elements";
import { selectedElementStore } from "@/store/selectedElement";
import { Element } from "@/types/element";
import classNames from "classnames";
import { FC, Fragment, useMemo } from "react";

const ElementOutputItem: FC<{
    element: Element;
}> = ({ element }) => {
    const selectedElement = selectedElementStore((state) => state.selectedElement);

    const isSelected = useMemo(
        () => selectedElement === element.id,
        [selectedElement, element]
    );

    const outputElement = useMemo(
        () => {
            console.log('outputElement', element);
            return {
                ...element,
                props: {
                    ...element.props,
                    style: {
                        ...element.props.style,
                        outline: isSelected ? '1px dashed #00f' : 'none',
                    },
                },
            }
        },
        [element, isSelected],
    );
    return (
        <Fragment>
            {outputElement}
        </Fragment>
    );
};
const Output: FC = () => {
    const elements = elementsStore((state) => state.elements);
    return (
        <Fragment>
            {
                elements.map(
                (element, index) => (
                        <ElementOutputItem key={index} element={element} />
                    )
                )
            }
        </Fragment>
    );
};

export default Output;
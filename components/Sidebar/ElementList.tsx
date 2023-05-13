import { elementsStore } from "@/store/elements";
import { selectedElementStore } from "@/store/selectedElement";
import { Element } from "@/types/element";
import classNames from "classnames";
import { FC, Fragment, useMemo } from "react";

const ListElement: FC<{
    element: Element;
}> = ({ element }) => {
    const selectElement = selectedElementStore((state) => state.setSelectedElement);
    const selectedElement = selectedElementStore((state) => state.selectedElement);

    const isSelected = useMemo(
        () => selectedElement === element.id,
        [selectedElement, element]
    );

    const onClick = () => {
        selectElement(element.id);
    };

    return (
        <div
            className={
                classNames(
                    'p-2 border-zinc-800 cursor-pointer',
                    {
                        'font-bold text-white bg-zinc-800': isSelected,
                    }
                )
            }
            onClick={onClick}
        >
            {element.name}
        </div>
    );
};

const ElementList: FC = () => {
    const elements = elementsStore((state) => state.elements);

    return (
        <Fragment>
            {
                elements.map((element, index) => (
                    <ListElement key={index} element={element} />
                ))
            }
        </Fragment>
    );
};

export default ElementList;

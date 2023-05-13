import { Element } from "@/types/element";
import { basicProps } from "@/utils/props";
import { FC } from "react";
import { PropEditor } from "../PropEditor";

const BasicProps: FC<{
    element: Element;
}> = ({ element }) => {
    return (
        <div>
            {
                basicProps.map(
                    (prop, index) => (
                        <PropEditor
                            key={index}
                            element={element}
                            prop={prop}
                        />
                    )
                )
            }
        </div>
    );
};

export default BasicProps;

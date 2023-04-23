import { actions } from "@/utils/actions";
import { FC } from "react";
import { ElementCreator } from "../ElementCreator";

const Actions: FC = () => {
    return (
        <div className="flex">
            {
                actions.map((action, index) => (
                    <ElementCreator key={index} { ...action } />
                ))
            }
        </div>
    );
};

export default Actions;

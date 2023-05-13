'use client'
import { FC } from "react";
import ElementList from "./ElementList";
import { ElementEditor } from "../ElementEditor";

const Sidebar: FC = () => (
    <div className="w-[15%] border-r border-zinc-700 bg-zinc-900 flex flex-col">
        <ElementEditor />
    </div>
);

export default Sidebar;

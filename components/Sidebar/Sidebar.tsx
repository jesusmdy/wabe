'use client'
import { FC } from "react";
import ElementList from "./ElementList";

const Sidebar: FC = () => (
    <div className="w-[15%] border-r border-zinc-700 bg-zinc-900">
        <ElementList />
    </div>
);

export default Sidebar;

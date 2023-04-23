import { FC } from "react";
import Actions from "./Actions";

const Navbar: FC = () => (
    <div className="border-b border-zinc-700 bg-zinc-900 h-16 flex items-center px-2">
        <Actions />
    </div>
);

export default Navbar;

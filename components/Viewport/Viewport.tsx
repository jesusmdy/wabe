import { FC } from "react";
import Output from "./Output";

const Viewport: FC = () => (
    <div className="w-full h-full flex items-center justify-center bg-zinc-900">
        <div className="w-[80%] h-[80%] bg-white flex flex-col rounded-xl">
            <div className="flex bg-gray-100 rounded-t-xl h-12 items-center px-2">
                <div className="flex p-2 gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full" />
                    <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                </div>
                <div className="flex-1" />
                <div className="w-[30%] bg-gray-200 h-8 rounded-lg flex items-center justify-center px-2">
                    <p className="text-gray-400 text-xs font-bol">yourweb.com</p>
                </div>
                <div className="flex-1" />
            </div>
            <div className="text-black">
                <Output />
            </div>
        </div>
    </div>
);

export default Viewport;

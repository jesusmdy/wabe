import { FC, PropsWithChildren } from "react";
import { Navbar, Sidebar } from '@/components';

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
    <main className="fixed left-0 right-0 top-0 bottom-0 w-full h-full flex flex-col">
        <Navbar />
        <div className="flex flex-1">
            <Sidebar />
            <div className="flex-1">{children}</div>
        </div>
    </main>
);

export default MainLayout;

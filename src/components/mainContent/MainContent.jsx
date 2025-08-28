import { Outlet } from "react-router";

export default function MainContent() {

    return (
        <main className="flex items-start m-8 w-full h-auto">
            <Outlet />
        </main>
    )
}
import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";

export default function AdminLayout() {
    return (
        <div>
            <MainNavigation />
            <Outlet />
        </div>
    );
}
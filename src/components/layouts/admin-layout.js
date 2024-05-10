import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";
import AdminMenu from "../admin/admin-menu";

export default function AdminLayout() {
    return (
        <div>
            <MainNavigation />

            <div className="admin-layout-body">
                <AdminMenu />

                <Outlet />
            </div>
        </div>
    );
}
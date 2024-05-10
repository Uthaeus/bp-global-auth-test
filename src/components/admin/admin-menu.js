import { NavLink, Link } from "react-router-dom";

function AdminMenu() {

    return (
        <div className="admin-menu">

            <NavLink to="/admin/users" className={({ isActive }) => isActive ? "admin-menu-item menu-item-active" : "admin-menu-item"}>Users</NavLink>

            <NavLink to="/admin/orders" className={({ isActive }) => isActive ? "admin-menu-item menu-item-active" : "admin-menu-item"}>Orders</NavLink>

            <div className="admin-menu-divider" />

            <Link to='/users/edit' className="admin-menu-link">Edit Profile</Link>
        </div>
    );
}

export default AdminMenu
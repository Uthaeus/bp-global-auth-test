import { NavLink } from "react-router-dom";

export default function MainNavigation() {
    return (
        <div className="main-navigation">
            <div className="main-navigation-left">
                <p>BP Global Auth</p>
            </div>

            <div className="main-navigation-right">
                <NavLink to="/" className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"} end>Home</NavLink>

                <NavLink to='/about' className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>About</NavLink>

                <NavLink to='/contact' className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>Contact</NavLink>

                <NavLink to='/admin' className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>Admin</NavLink>
            </div>
        </div>
    );
}
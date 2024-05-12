import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../../store/user-context";

export default function MainNavigation() {
    const { user, isAdmin, logoutUser } = useContext(UserContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        logoutUser();
        navigate('/');
    }

    return (
        <div className="main-navigation">
            <div className="main-navigation-left">
                <p>BP Global Auth</p>
            </div>

            <div className="main-navigation-right">
                <div className="main-navigation-right-header">
                    { user && <p className="nav-user-welcome">Welcome, <span className="nav-user-name">{ user?.name }</span></p> }
                    { !user && <p className="nav-user-welcome">Welcome, Guest</p> }

                    <p className="nav-phone">123-456-7890</p>
                </div>

                <div className="main-navigation-right-links">

                    <NavLink to="/" className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"} end>Home</NavLink>

                    <NavLink to='/about' className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>About</NavLink>

                    <NavLink to='/contact' className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>Contact</NavLink>

                    
                    { isAdmin ? (
                        <NavLink to='/admin' className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>Admin</NavLink>
                    ) : user ? (
                        <NavLink to='/account' className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>My Account</NavLink>
                    ) : (
                        <NavLink to='/login' className={({ isActive }) => isActive ? "main-nav-link link-active" : "main-nav-link"}>Login</NavLink>
                    )}

                    { user && <p className="main-nav-link" onClick={logoutHandler}>Logout</p>}

                </div>
            </div>
        </div>
    );
}
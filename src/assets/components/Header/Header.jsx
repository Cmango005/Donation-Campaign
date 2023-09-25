import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="navbar container mx-auto bg-base-100">
           <div className="flex-1">
           <img src="/public/Logo.png" alt="" />
           </div>
           <div className="flex-none">
                <nav className="menu menu-horizontal gap-14 px-1">
                 <NavLink to="/">Home</NavLink>
                 <NavLink to="/donation">Donation</NavLink>
                 <NavLink to="/static">Statistics</NavLink>
                </nav>
            </div>
       </div>
    );
};

export default Header;

import { useState } from "react";
import NavLinks from "./NavLinks";

const NavBar = () => {
    const [user, setUser] = useState({ name: "Something" });

    const logOut = () => {
        setUser(null);
    };
    return (
        <nav className="navbar">
            <h5>CONTEXT API</h5>
            <NavLinks user={user} logOut={logOut} />
        </nav>
    );
};
export default NavBar;

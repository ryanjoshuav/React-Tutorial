import { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);

const NavBar = () => {
    const [user, setUser] = useState({ name: "Something" });

    const logOut = () => {
        setUser(null);
    };

    return (
        <NavbarContext.Provider value={{ user, logOut }}>
            <nav className="navbar">
                <h5>CONTEXT API</h5>
                <NavLinks />
            </nav>
        </NavbarContext.Provider>
    );
};
export default NavBar;

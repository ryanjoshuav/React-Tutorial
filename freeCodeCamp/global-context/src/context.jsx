import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

const AppContext = ({ children }) => {
    const [name, setName] = useState("Pete");
    return (
        <GlobalContext.Provider value={{ setName, name }}>
            {children}
        </GlobalContext.Provider>
    );
};
export default AppContext;

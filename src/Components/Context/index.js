import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    const [contextState, setContextState] = useState({
        date: null,
        displayDate: null,
        text: "",
        theme: null,
    });

    return (
        <AppContext.Provider
            value={{
                contextState,
                setContextState,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };

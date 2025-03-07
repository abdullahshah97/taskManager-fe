import React, { createContext, useState, useContext, ReactNode } from "react";
import {AuthContextType} from "../interfaces/Interfaces";

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setTokenState] = useState<string | null>(() => {
        return sessionStorage.getItem("token"); // Get token from session storage on load
    });

    // Function to update token and save to session storage
    const setToken = (newToken: string | null) => {
        setTokenState(newToken);
        if (newToken) {
            sessionStorage.setItem("token", newToken); // Save token
        } else {
            sessionStorage.removeItem("token"); // Remove token on logout
        }
    };

    // Function to log out the user
    const logout = () => {
        setToken(null); // Clear token
    };

    return (
        <AuthContext.Provider value={{ token, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

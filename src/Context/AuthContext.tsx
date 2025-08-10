import React, { createContext, useState, useContext, type ReactNode } from "react";

interface AuthContextType {
    username: string | null;
    setUsername: React.Dispatch<React.SetStateAction<string | null>>;
    userToken: string | null;
    setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [username, setUsername] = useState<string | null>(null);
    const [userToken, setUserToken] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <AuthContext.Provider
            value={{
                username,
                setUsername,
                userToken,
                setUserToken,
                isAuthenticated,
                setIsAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used inside AuthProvider");
    }
    return context;
}

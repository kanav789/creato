import React, { createContext, useState, useContext, type ReactNode } from "react";

interface GithubInfo {
    username: string;
    showContribution: boolean;
}

interface Experience {
    // Replace these with the actual fields from your backend
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    // add more as needed
}

interface Project {
    // Replace with your actual project fields
    title: string;
    details: string;
    Githublink?: string;
    liveLink?: string;

}

interface UserData {
    _id: string;
    userId: string;
    username: string;
    bio: string;
    github: GithubInfo;
    experiences: Experience[];
    importantLinks: string[];
    projects: Project[];
    skills: string[];
    whatiamdoing: string[];
    __v: number;
}

interface DataContextType {
    data: UserData | null;
    setData: React.Dispatch<React.SetStateAction<UserData | null>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
    children: ReactNode;
}

export function DataProvider({ children }: DataProviderProps) {
    const [data, setData] = useState<UserData | null>(null);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
}

export function useDataContext() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useDataContext must be used inside DataProvider");
    }
    return context;
}

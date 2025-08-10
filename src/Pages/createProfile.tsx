import React, { useState, useRef, useEffect } from "react";
import { getData, PostData } from "../utility/CustomFetchData/CustomFetchData";

const initialData = {
    username: "khiladi_coder",
    bio: "Full stack developer passionate about building scalable web apps.",
    importantLinks: [
        "https://github.com/khiladi_coder",
        "https://linkedin.com/in/khiladi_coder"
    ],  
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    experiences: [
        {
            startDate: "2023-01-01",
            endDate: "2023-06-01",
            role: "Frontend Intern",
            company: "TechNova Inc.",
            description: "Worked on building UI components using React and Tailwind CSS."
        },
        {
            startDate: "2023-07-01",
            endDate: "2024-01-01",
            role: "Full Stack Developer",
            company: "CodeLab",
            description: "Developed full-stack applications using the MERN stack."
        }
    ],
    projects: [
        {
            title: "RwEaRs - E-commerce Web App",
            details:
                "An online shopping platform with user authentication, cart, and Razorpay integration.",
            GitHubLink: "https://github.com/khiladi_coder/rwears",
            liveLink: "https://rwears.vercel.app"
        },
        {
            title: "Task Tracker",
            details: "A simple task tracking app with drag-and-drop UI.",
            GitHubLink: "https://github.com/khiladi_coder/task-tracker",
            liveLink: "https://task-tracker-app.vercel.app"
        }
    ]
};

export default function EditableJson() {
    const [data, setData] = useState(initialData);
    const [isEditing, setIsEditing] = useState(false);
    const editableRef = useRef(null);
    useEffect(() => {
        fetchProfile();
    }, []);


    const fetchProfile = async () => {
        try {
            const response = await getData(
                {
                    apiurl: `${import.meta.env.VITE_API_URL}api/profile/getprofile`,
                }
            )
            console.log(response.userprofile, "data")
            setData(response?.userprofile || initialData);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    }
    //  handle save
    const handleSave = async () => {
        try {
            const updatedJson = JSON.parse(editableRef.current.innerText);

            await PostData({ apiurl: `${import.meta.env.VITE_API_URL}api/profile/create`, body: updatedJson });
            setData(updatedJson);
            setIsEditing(false);
        } catch (error) {
            alert("Invalid JSON format. Please fix it before saving.");
        }
    };

    return (
        <div style={{ fontFamily: "monospace", padding: "20px" }}>
            <pre
                ref={editableRef}
                contentEditable={isEditing}
                suppressContentEditableWarning={true}
                style={{
                    border: isEditing ? "1px solid #ccc" : "none",
                    borderRadius: "20px",
                    padding: "10px",
                    outline: "none",
                    background: isEditing ? "#111827" : "transparent",
                    boxShadow: "10px 0 10px rgba(0, 0, 0, 0.1)",
                    color: "gray"
                }}
            >
                {JSON.stringify(data, null, 2)}
            </pre>

            {!isEditing ? (
                <button onClick={() => setIsEditing(true)} className="text-gray-400 border hover:bg-gray-600 cursor-default p-2 text-[12px] rounded-sm transition-colors duration-700 sm:text-[14px] sm:py-2 sm:px-4">Edit</button>
            ) : (
                    <button onClick={handleSave} className="text-gray-400 border hover:bg-gray-600 cursor-default p-2 text-[12px] rounded-sm transition-colors duration-700 sm:text-[14px] sm:py-2 sm:px-4">Save</button>
            )}
        </div>
    );
}

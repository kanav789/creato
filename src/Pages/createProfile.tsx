import { useState, useRef, useEffect } from "react";
import { getData, PostData } from "../utility/CustomFetchData/CustomFetchData";
import { ClipLoader } from "react-spinners";

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
    const [Loader,setLoader ]=useState<boolean>(false)
    const [buttonLoader,setButtonLoader]= useState<boolean>(false)
    useEffect(() => {
        fetchProfile();
    }, []);


    const fetchProfile = async () => {
        try {
            setLoader(true)
            const response = await getData(
                {
                    apiurl: `${import.meta.env.VITE_API_URL}api/profile/getprofile`,
                }
            )
            console.log(response.userprofile, "data")
            console.log(response,"response")
            setData(response?.userprofile || initialData);
        } catch (error) {
            console.error("Error fetching profile:", error);
        } finally {
            setLoader(false)
        }   
    }
    const editableRef = useRef<HTMLPreElement>(null);

    const handleSave = async () => {
        try {
            setButtonLoader(true)
            if (editableRef.current) {
                const updatedJson = JSON.parse(editableRef.current.innerText || "{}");

                await PostData({
                    apiurl: `${import.meta.env.VITE_API_URL}api/profile/create`,
                    body: updatedJson
                });

            setData(updatedJson);
            setIsEditing(false);
            }
        } catch (error) {
            alert("Invalid JSON format. Please fix it before saving.");
        } finally {
            setButtonLoader(false)
        }
    };


    return (
        <div className="min-h-screen" style={{ backgroundColor: '#111827' }}>
            {Loader ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="text-center">
                        <ClipLoader color="#8b5cf6" size={50} />
                        <p className="text-purple-300 mt-4 text-lg">Loading your profile...</p>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto px-4 py-8">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            Profile Editor
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Edit and manage your professional profile information
                        </p>
                    </div>

                    {/* Profile Preview Cards */}
                    {!isEditing && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            {/* Basic Info Card */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                                    <h2 className="text-xl font-semibold text-white">Basic Information</h2>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-gray-400 text-sm">Username</label>
                                        <p className="text-white font-mono">{data.username}</p>
                                    </div>
                                    <div>
                                        <label className="text-gray-400 text-sm">Bio</label>
                                        <p className="text-gray-200">{data.bio}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Card */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                                    <h2 className="text-xl font-semibold text-white">Skills</h2>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {data.skills.map((skill, index) => (
                                        <span key={index} className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Experience Card */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl lg:col-span-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                                    <h2 className="text-xl font-semibold text-white">Experience</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {data.experiences.map((exp, index) => (
                                        <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                                            <h3 className="text-white font-semibold">{exp.role}</h3>
                                            <p className="text-purple-300 text-sm">{exp.company}</p>
                                            <p className="text-gray-400 text-xs mb-2">
                                                {exp.startDate} - {exp.endDate}
                                            </p>
                                            <p className="text-gray-300 text-sm">{exp.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Projects Card */}
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl lg:col-span-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                                    <h2 className="text-xl font-semibold text-white">Projects</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {data.projects.map((project, index) => (
                                        <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                                            <h3 className="text-white font-semibold mb-2">{project.title}</h3>
                                            <p className="text-gray-300 text-sm mb-3">{project.details}</p>
                                            <div className="flex gap-2">
                                                <a href={project.GitHubLink} target="_blank" rel="noopener noreferrer" 
                                                   className="px-3 py-1 bg-gray-600/30 border border-gray-500/30 rounded-lg text-gray-300 text-xs hover:bg-gray-600/50 transition-colors">
                                                    GitHub
                                                </a>
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                                   className="px-3 py-1 bg-emerald-600/30 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs hover:bg-emerald-600/50 transition-colors">
                                                    Live Demo
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* JSON Editor Section */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                                <h2 className="text-xl font-semibold text-white">JSON Editor</h2>
                            </div>
                            <div className="text-gray-400 text-sm">
                                {isEditing ? "Editing Mode" : "View Mode"}
                            </div>
                        </div>
                        
                        <pre
                            ref={editableRef}
                            contentEditable={isEditing}
                            suppressContentEditableWarning={true}
                            className={`font-mono text-sm p-4 rounded-xl outline-none transition-all duration-300 ${
                                isEditing 
                                    ? "bg-gray-900/80 border-2 border-purple-400/50 text-gray-200 shadow-[0_0_20px_rgba(168,85,247,0.3)]" 
                                    : "bg-gray-800/50 text-gray-300"
                            }`}
                            style={{
                                minHeight: "300px",
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-word"
                            }}
                        >
                            {JSON.stringify(data, null, 2)}
                        </pre>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center">
                        {!isEditing ? (
                            <button 
                                onClick={() => setIsEditing(true)} 
                                className="relative overflow-hidden px-8 py-4 bg-black/20 backdrop-blur-md border border-cyan-400/50 rounded-2xl text-cyan-300 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:border-cyan-300 transition-all duration-500 group"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                    Edit Profile
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </button>
                        ) : (
                            <div className="flex gap-4">
                                <button 
                                    onClick={() => setIsEditing(false)} 
                                    className="relative overflow-hidden px-8 py-4 bg-black/20 backdrop-blur-md border border-red-400/50 rounded-2xl text-red-300 font-semibold shadow-[0_0_20px_rgba(248,113,113,0.3)] hover:shadow-[0_0_30px_rgba(248,113,113,0.5)] hover:border-red-300 transition-all duration-500 group"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                                        Cancel
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </button>
                                <button 
                                    onClick={handleSave} 
                                    disabled={buttonLoader} 
                                    className="relative overflow-hidden px-8 py-4 bg-black/20 backdrop-blur-md border border-emerald-400/50 rounded-2xl text-emerald-300 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:border-emerald-300 transition-all duration-500 group disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {buttonLoader ? (
                                            <>
                                                <ClipLoader color="#10b981" size={16} />
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                                Save Changes
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

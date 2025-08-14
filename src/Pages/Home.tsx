
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
function Home() {
    const navigate = useNavigate()
    const { userToken } = useAuthContext()
    console.log("userToken", userToken)
   
    return (
        <div className="min-h-screen bg-gray-900" style={{ backgroundColor: '#111827' }}>
            {/* Header */}
            <header className="px-6 py-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-3xl font-bold text-white">
                        Creato
                    </div>

                  <div className="flex items-center gap-2">
                      {/* GitHub Icon */}
                      <Link
                        to={"https://github.com/kanav789/creato"}
                        className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                        <FaGithub className="w-6 h-6" />
                    </Link>

                {userToken ? (<button  className="py-2 px-4 bg-[#111827] text-white font-medium text-sm rounded-md border border-gray-600 shadow-sm hover:border-blue-500 hover:bg-[#1f2937] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={()=> navigate("/logout")}  >
                  Logout
                </button>) : <button
                        type="submit"
                        className="py-2 px-4 bg-[#111827] text-white font-medium text-sm rounded-md border border-gray-600 shadow-sm hover:border-blue-500 hover:bg-[#1f2937] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>}
                  </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Hero Section */}
                    <div className="py-20">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Build Your Perfect
                            <span className="block text-blue-400 mt-2">
                                Developer Portfolio
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Create a stunning portfolio that showcases your coding skills and projects.
                            Stand out to employers with a professional developer portfolio.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 cursor-pointer" onClick={() => navigate("/profilesetting")}>
                                Get Started
                            </button>

                         
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="py-20">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Easy to Use</h3>
                                <p className="text-gray-400">
                                    No coding required. Simply add your projects and customize your portfolio in minutes.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Developer Focused</h3>
                                <p className="text-gray-400">
                                    Built specifically for developers with GitHub integration and project showcases.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Professional Design</h3>
                                <p className="text-gray-400">
                                    Beautiful templates that look amazing and help you stand out from the crowd.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Open Source Section */}
                    <div className="py-20">
                        <div className="bg-gray-800 rounded-2xl p-12 border border-gray-700">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Open Source Project
                            </h2>

                            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                                Creato is completely open source and community-driven. We welcome contributions
                                from developers who want to help others showcase their work.
                            </p>

                            <a
                                href="#"
                                className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                            >
                                <FaGithub className="w-5 h-5" />
                                <Link
                                    to={"https://github.com/kanav789/creato"}>Contribute on GitHub</Link>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-8 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-400">
                        Kanav Rana
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
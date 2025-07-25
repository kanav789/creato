export default function Experience() {
    const experiences = [
        {
            date: "August 2024 - current",
            title: "Frontend Developer Intern | Fascave",
            description:
                "Developed a company website using Astro, enhancing the firm's online presence and providing a modern, responsive design.",
        },

    ];
    return (
        <section className="pl-14 sm:pl-[40vh] mt-10">
            <div>
                <h2 className="mt-10 text-[17px] font-medium sm:text-[22px]">Experience</h2>
                <div className="relative pl-6 border-l-2 border-gray-600 mt-10">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-10 relative group">
                            {/* Dot */}
                            <div className="absolute -left-[31px] sm:w-4 sm:h-4 sm:-left-[32px] top-1 w-3 h-3 bg-[#374053] rounded-full  transition-transform"></div>

                            {/* Content */}
                            <div className="ml-4">
                                <p className="text-sm text-gray-400 capitalize font-medium">{exp.date}</p>
                                <h3 className="text-white font-semibold">{exp.title}</h3>
                                <p className="text-gray-400  sm:w-[650px] text-[14px] sm:text-[16px] flex flex-wrap">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    )
}
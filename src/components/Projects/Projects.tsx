export default function Projects() {
    const projects = [
        {
            name: "Finance Tracker",
            description: "Built a finance tracker application for the tracking of personal expenses.Integrated a graphs for visualising the transactions easily.Trying to implementing a socket.io for the responses. ",
            link: "https://github.com/kanav789/personalFinance",
            live: "https://personal-finance-eight-nu.vercel.app/"
        },
        {
            name: "Rwear",
            description: "Responsive design for mobile and desktop using Tailwind CSS. Implemented a product page with a cart system and integrated Razorpay for payment processing.",
            link: "https://github.com/kanav789/Rwear",
            live: "https://rwear.vercel.app/"
        }

    ]
    return (
        <section className="pl-14 sm:pl-[40vh] mt-10">
            <h2 className="text-[17px] font-medium sm:text-[22px]">Projects</h2>

            <div>
                {projects?.map((project: any, index: any) => (
                    <div key={index} className="flex flex-col w-90 sm:w-[650px] mt-2 ">
                        <h3 className="text-[15px] font-medium  sm:text-[17px] ">{project.name}</h3>
                        <p className="text-gray-400 text-[14px] sm:text-[16px] mt-1">{project.description}</p>
                        <div className="flex gap-2 mt-1">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-[12px] sm:text-[14px]">View Code</a>
                            {project?.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-[12px] sm:text-[14px]">View</a>
                            }

                        </div>
                        <p className="bg-gray-700 h-[1px] w-full my-2"></p>
                    </div>
                ))}
            </div>

        </section>
    )
}
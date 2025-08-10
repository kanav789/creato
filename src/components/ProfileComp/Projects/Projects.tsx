import { useDataContext } from "../../../Context/DataContext"

export default function Projects() {
    const { data } = useDataContext()
    return (
        <section className="pl-14 sm:pl-[40vh] mt-10">
            <h2 className="text-[17px] font-medium sm:text-[22px]">Projects</h2>

            <div>
                {data?.projects?.map((project: any, index: any) => (
                    <div key={index} className="flex flex-col  sm:w-[650px] mt-2 flex-wrap ">
                        <h3 className="text-[15px] font-medium  sm:text-[17px] ">{project.title}</h3>
                        <p className="text-gray-400 text-[14px] sm:text-[16px] mt-1">{project.details}</p>
                        <div className="flex gap-2 mt-1">
                            <a href={project.GitHubLink?.[0]} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-[12px] sm:text-[14px]">View Code</a>
                            {project?.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-[12px] sm:text-[14px]">View</a>
                            }

                        </div>
                        <p className="bg-gray-700 h-[1px] w-full my-2"></p>
                    </div>
                ))}
            </div>

        </section>
    )
}
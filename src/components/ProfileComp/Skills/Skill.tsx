import { useDataContext } from "../../../Context/DataContext"

export default function Skill() {

    const skill = [
        { name: "Javascript" },
        { name: "Typescript" },
        { name: "React" },
        { name: "Redux" },

        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MongoDB" },
        { name: "Git" },
        { name: "Github" },
        { name: "REST APIs" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "PostMan" },
        { name: "Vercel" },
        { name: " Netlify" }
    ]
    const { data } = useDataContext()
    return (
        <section className="pl-14 sm:pl-[40vh] mt-10">
            <h2 className="text-[17px] font-medium sm:text-[22px]">Skills</h2>
            <div className="mt-2 flex flex-wrap gap-2 sm:w-[650px]">
                {data?.skills?.map((item: any) => (
                    <button className="text-gray-400 border hover:bg-gray-600 cursor-default p-2 text-[12px] rounded-sm transition-colors duration-700 sm:text-[14px] sm:py-2 sm:px-4" key={item.key}>{item}</button>

                ))}  </div>

        </section>
    )
}
import { FaGithub } from "react-icons/fa";
import { useDataContext } from "../../../Context/DataContext";

export default function Header() {
    const { data } = useDataContext()
    console.log(data, "data")

    return (
        <header>

            <div className="flex justify-between px-3  sm:px-7 py-4">
                {/* creato */}
                <div className="">
                    <h3 className="text-gray-500 font-bold text-lg">{data?.username || "dummy name"}</h3>
                </div>
                {/* Light */}

                <div>
                    <a className="text-gray-500 text-2xl font-medium hover:underline cursor-pointer " href={`https://github.com/${data?.github?.username || "dummy"}`}><FaGithub />
                    </a>
                </div>



            </div>




        </header>
    )


}
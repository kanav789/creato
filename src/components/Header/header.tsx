import { FaGithub } from "react-icons/fa";

export default function Header() {


    return (
        <header>

            <div className="flex justify-between px-3  sm:px-7 py-4">
                {/* creato */}
                <div className="">
                    <h3 className="text-gray-500 font-bold text-lg">Kanav Rana</h3>
                </div>
                {/* Light */}

                <div>
                    <a className="text-gray-500 text-2xl font-medium hover:underline cursor-pointer " href="https://github.com/kanav789"><FaGithub />
                    </a>
                </div>



            </div>




        </header>
    )


}
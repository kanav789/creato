import { useDataContext } from "../../../Context/DataContext"

export default function Footer() {
    const { data } = useDataContext()
    return (
        <footer className="mt-[20px] flex justify-center flex-col items-center ">

            <p className="text-gray-400 text-center text-[10px] sm:text-[14px] mt-8">© 2024 <span className="capitalize">{data?.username}</span>. All rights reserved.</p>
        </footer>
    )

}
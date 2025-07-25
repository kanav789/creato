export default function Header() {


    return (
        <header>

            <div className="flex justify-between px-3  sm:px-7 py-4">
                {/* creato */}
                <div className="">
                    <h3 className="text-gray-500 font-bold text-lg">Creato</h3>
                </div>
                {/* Light */}

                <div>
                    <span className="text-gray-500 font-medium hover:underline cursor-pointer ">Light</span>
                </div>



            </div>




        </header>
    )


}
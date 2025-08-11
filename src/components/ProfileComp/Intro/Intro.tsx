import { useDataContext } from "../../../Context/DataContext"


export default function Intro() {

    const { data } = useDataContext();
    return (
        <section className="mt-10">
            <div className="flex flex-col pl-14 sm:pl-[40vh] sm:mt-20 flex-wrap">
                <h1 className="text-2xl font-medium sm:text-[44px] capitalize">Hi, I'm {data?.username ? data?.username : "dummy_name"}</h1>
                <p className="
                mt-5
                    text-[14px]
                    text-gray-400
                  
                    font-normal
                    leading-6
                    sm:text-[16px]
                    sm:w-[650px]

                ">
                    {data?.bio ? data?.bio : "Software"}
                </p>

                {/* button */}
                {(data?.importantLinks?.length ?? 0) > 0 && <div className="flex flex-col gap-1 sm:flex-row mt-4 text-gray-200 text-[15px] sm:gap-4">
                    {data?.importantLinks?.map((items, index) => <a className="hover:underline transition-discrete duration-900 hover:tracking-wider" href={items.url} key={index}>
                        {items.name}
                    </a>)}

                </div>}

                {/* what i am doing */}

                {data?.whatiamdoing && <div>
                    <h2 className="mt-10 text-[17px] font-medium sm:text-[22px]">What I am doing</h2>
                    <ul className="flex flex-col pl-5 gap-1 mt-4 ">
                        {data?.whatiamdoing.map((item, index) => (
                            <li key={index} className="text-gray-400 text-[14px] list-disc sm:text-[16px]">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>}



            </div>


        </section>

    )







}
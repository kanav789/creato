// interface IntroProps {
//     name: string;
//     bio: string;
//     contactMe?: string;
//     resume?: string;
//     blogs?: string;
// }



export default function Intro() {
    const introdata = [
        {
            name: "Kanav Rana",
            bio: " Frontend Developer who know backend as well.I love to code and create new things. I am passionate about learning new technologies and improving my skills.",
            contactMe: "mailto:kanavrana91@gmail.com",
            resume: "https://drive.google.com/file/d/1QY2oIlANW0h4c6tLlOP6r3kmZbr_ehij/view?usp=sharing",
        }
    ]

    const whatamdoing = [
        {
            list: "I am working as Frontend Intern in startup."
        },
        {
            list: "Enhancing my expertise towards backend."
        },
        {
            list: "Currently learning dsa and exploring new technologies."
        }
    ]

    return (
        <section className="mt-10">
            <div className="flex flex-col pl-14 sm:pl-[40vh] sm:mt-20 flex-wrap">
                <h1 className="text-2xl font-medium sm:text-[44px]">Hi, I'm {introdata?.[0]?.name}.</h1>
                <p className="
                mt-5
                    text-[14px]
                    text-gray-400
                  
                    font-normal
                    leading-6
                    sm:text-[16px]
                    sm:w-[650px]

                ">
                    {introdata?.[0]?.bio}
                </p>

                {/* button */}
                <div className="flex flex-col gap-1 sm:flex-row mt-4 text-gray-200 text-[15px] sm:gap-4">
                    {introdata?.[0]?.resume && <a className="hover:underline transition-discrete duration-900 hover:tracking-wider" href={introdata?.[0]?.resume}>
                        Resume
                    </a>}
                    {introdata?.[0]?.resume && <a className="hover:underline transition-discrete duration-900 hover:tracking-wider" href={introdata?.[0]?.contactMe}>
                        ContactMe
                    </a>}
                </div>

                {/* what i am doing */}

                <div>
                    <h2 className="mt-10 text-[17px] font-medium sm:text-[22px]">What I am doing</h2>
                    <ul className="flex flex-col pl-5 gap-1 mt-4 ">
                        {whatamdoing.map((item, index) => (
                            <li key={index} className="text-gray-400 text-[14px] list-disc sm:text-[16px]">
                                {item.list}
                            </li>
                        ))}
                    </ul>
                </div>



            </div>


        </section>

    )







}
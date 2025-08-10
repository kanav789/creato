import { useEffect, useState } from "react";
import Contribution from "../components/ProfileComp/Contribution/contribution";
import Experience from "../components/ProfileComp/Experience/Experience";
import Footer from "../components/ProfileComp/Footer/Footer";
import Header from "../components/ProfileComp/Header/header";
import Intro from "../components/ProfileComp/Intro/Intro";
import Projects from "../components/ProfileComp/Projects/Projects";
import Skill from "../components/ProfileComp/Skills/Skill";
import { getData } from "../utility/CustomFetchData/CustomFetchData";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useDataContext } from "../Context/DataContext";
export default function Profile() {
    const { id } = useParams()
    const [Loader, setLoader] = useState(false)

    const { data, setData } = useDataContext()
    const fetchdata = async () => {
        try {
            setLoader
            const response = await getData({
                apiurl: `${import.meta.env.VITE_API_URL}api/profile/get/${id}`,
            })
            if (response) {

                setData(response.profile)
            }
            setLoader(false)
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoader(false)
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])









    return (
        <div className="w-full px-3">


            {Loader ? (
                <p className="flex justify-center items-center"><ClipLoader size={20} color="gray" /></p>
            ) :
                (<div>
                    {data?.github?.username && data?.username && <Header />}
                    {data?.username && <Intro />}
                    {data?.github?.showContribution === true && data?.github?.username && <Contribution />}
                    {(data?.skills?.length ?? 0) > 0 && <Skill />}
                    {(data?.experiences?.length ?? 0) > 0 && <Experience />}
                    {(data?.projects?.length ?? 0) > 0 && <Projects />}
                    {data?.username && <Footer />}
                </div>)
            }


        </div>
    )

}
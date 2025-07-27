import Contribution from "../components/ProfileComp/Contribution/contribution";
import Experience from "../components/ProfileComp/Experience/Experience";
import Footer from "../components/ProfileComp/Footer/Footer";
import Header from "../components/ProfileComp/Header/header";
import Intro from "../components/ProfileComp/Intro/Intro";
import Projects from "../components/ProfileComp/Projects/Projects";
import Skill from "../components/ProfileComp/Skills/Skill";

export default function Profile() {
    return (
        <div className="w-full px-3">
            <Header />
            <Intro />
            <Contribution />
            <Skill />
            <Experience />
            <Projects />
            <Footer />

        </div>
    )

}
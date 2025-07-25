import Experience from "./components/Experience/Experience";
import Header from "./components/Header/header";
import Intro from "./components/Intro";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skills/Skill";

export default function App() {
    return (
        <div className="w-full">
            <Header />
            <Intro />
            <Skill />
            <Experience />
            <Projects />

        </div>
    )

}
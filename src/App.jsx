import Profile from "./Components/Profile";
import Education from "./Components/Education";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

function App() {
    return (
        <div className="w-[95%] sm:w-[90%]  my-32 grid gap-16 3xl:w-[2280px]">
            <Profile />
            <Education />
            <Work />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
    return (
        <>
            <Navbar
                title="Suwi"
                nav1="Home"
                nav2="Constact"
                nav3="About Us"
                colorMode={colorMode}
            />
            <TextForm
                heading="Enter the text to analyze"
                colorMode={colorMode}
            />
            <About colorMode={colorMode} />
        </>
    );
}
export default App;

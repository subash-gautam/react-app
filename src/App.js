import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
    return (
        <>
            <Navbar title="Suwi" nav1="Home" nav2="Constact" nav3="About Us" />
            <TextForm heading="Enter the text to analyze" />
        </>
    );
}
export default App;

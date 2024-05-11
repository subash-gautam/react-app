import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

function App() {
    const [mode, setMode] = useState("light");
    const toggleMode = (newMode) => {
        if (newMode === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    };
    return (
        <>
            <Navbar
                title="Suwi"
                nav1="Home"
                nav2="Constact"
                nav3="About Us"
                mode={mode}
                toggleMode={toggleMode}
            />
            <TextForm
                heading={`Enter the text to analyze`}
                mode={mode}
                toggleMode={toggleMode}
            />
            <About mode={mode} toggleMode={toggleMode} />
        </>
    );
}
export default App;

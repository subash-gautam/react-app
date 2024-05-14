import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);
    const toggleMode = (newMode) => {
        if (newMode === "light") {
            setMode("dark");
            document.body.style.background = "#731700";
            showAlert("Dark mode is enabled.", "success");
        } else {
            setMode("light");
            document.body.style.background = "white";
            showAlert("Light Mode is enabled", "danger");
        }
    };
    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });
        setTimeout(function () {
            setAlert(null);
        }, 1500);
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
            <Alert alert={alert} />
            <TextForm
                heading={`Enter the text to analyze`}
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
            />
            {/* <About mode={mode} toggleMode={toggleMode} /> */}
        </>
    );
}
export default App;

import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUcClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "warning");
    };
    const handleLcClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
    };
    const handleClrClick = () => {
        const newText = "";
        setText(newText);
    };
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div>
            <div className={`container my-3`}>
                <h1
                    className={`my-3 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}>
                    {props.heading}
                </h1>
                <div className="my-3">
                    <textarea
                        className={`form-control bg-${props.mode} text-${
                            props.mode === "dark" ? "light" : "dark"
                        }`}
                        value={text}
                        onChange={handleOnChange}
                        id="exampleFormControlTextarea1"
                        rows="11"></textarea>
                </div>
                <button
                    className="btn btn-primary mx-3 my-3"
                    onClick={handleUcClick}>
                    Convert to Upper case
                </button>
                <button
                    className="btn btn-primary mx-3 my-3"
                    onClick={handleLcClick}>
                    Convert to Lower case
                </button>
                <button
                    className="btn btn-primary mx-3 my-3"
                    onClick={handleClrClick}>
                    Clear
                </button>
                <button
                    type="submit"
                    onClick={speak}
                    className="btn btn-warning mx-3 my-3">
                    Speak
                </button>
            </div>
            <div className="container">
                <p
                    className={`text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}>
                    No of words : {text.split(" ").length}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No of letters :
                    {text.length}
                </p>
                <p
                    className={`text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}>
                    text summary: <br />
                    {text}
                </p>
            </div>
        </div>
    );
}

import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here.");

    const handleUCClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div>
            <div className="container my-3">
                <h1 className="my-3">{props.heading}</h1>
                <div className="my-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="exampleFormControlTextarea1"
                        rows="11"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUCClick}>
                    Convert to Upper case
                </button>
            </div>
        </div>
    );
}

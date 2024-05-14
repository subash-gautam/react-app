import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
            <p></p>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {props.title}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link "
                                aria-current="page"
                                href="/">
                                {props.pg}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="/">
                                {props.nav1}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="/">
                                {props.nav2}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="/">
                                {props.nav3}
                            </a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            onClick={function () {
                                props.toggleMode(props.mode);
                            }}
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                        />
                        <label
                            className={`form-check-label text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                            htmlFor="flexSwitchCheckDefault">
                            Toggle Mode
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    pg: PropTypes.number,
};

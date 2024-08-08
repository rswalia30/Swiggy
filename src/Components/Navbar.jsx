/* eslint-disable react/jsx-no-duplicate-props */
import { SWIGGY_LOGO } from "../constants/constants";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
// import { useEffect } from "react";

const Navbar = () => {
    const [btnText, setBtnText] = useState("Login");

    // useEffect(() => { console.log("useEffect called") })
    // useEffect(() => { console.log("useEffect called") }, [])
    // useEffect(() => { console.log("useEffect called") }, [btnText])

    // console.log("Navbar render");

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container-fluid">
                <Link to="/">
                    <img src={SWIGGY_LOGO} alt="" width="auto" height="24" />
                </Link>

                {/* Links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <NavLink to="/"
                                className={({ isActive }) => {
                                    return isActive ? "text-danger text-decoration-none" : "text-dark text-decoration-none";
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/about"
                                className={({ isActive }) => {
                                    return isActive ? "text-danger text-decoration-none" : "text-dark text-decoration-none";
                                }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/contact"
                                className={({ isActive }) => {
                                    return isActive ? "text-danger text-decoration-none" : "text-dark text-decoration-none";
                                }}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                </div>

                <div className="d-flex">
                    <button className="btn btn-danger mx-2"
                        onClick={() => {
                            (btnText === "Login") ? setBtnText("Logout") : setBtnText("Login");
                        }}
                    >{btnText}</button>
                </div>


                <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav >

    )
}

export default Navbar;
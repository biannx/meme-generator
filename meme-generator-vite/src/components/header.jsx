import React from "react";
import headerLogo from '../assets/TrollFace.png'

export default function Header() {
    return (
        <header className="container-fluid">
            <nav className="container py-3">
                <img className="nav-logo" src={headerLogo} alt="Header Meme Logo" />
                <h3 className="nav-brand px-3 pt-2">
                    Meme Generator
                </h3>
                <h6 className="project-number">
                    React Course - Project 3
                </h6>
            </nav>
        </header>
    )
}
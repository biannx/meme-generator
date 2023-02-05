import React from "react";
import headerLogo from '../assets/TrollFace.png'

export default function Header() {
    return (
        <header className="container-fluid">
            <nav className="container py-3">
                <img className="nav-logo" src={headerLogo} alt="Header Meme Logo" />
                <h2 className="nav-brand px-3 py-2">
                    Meme Generator
                </h2>
                <h5 className="project-number">
                    React Course - Project 3
                </h5>
            </nav>
        </header>
    )
}
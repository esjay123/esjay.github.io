import React, { useState } from "react";
import './Navigation.css';

export default function Navigation() {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <nav>
            <div className={isActive ? "hamburger open" : "hamburger"} onClick={handleToggle}>
                <div className="line"/>
                <div className="line"/>
                <div className="line"/>
            </div>
            <ul className={isActive ? "nav-links open" : "nav-links"}>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
            </ul>
        </nav>
    )
}

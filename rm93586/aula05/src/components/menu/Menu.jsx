import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Link1</Link></li>
                </ul>
            </nav>
        </header>
    )
}
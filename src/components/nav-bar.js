import React from "react";

export default class NavBar extends React.Component {
    render() {
        return(
            <div className="nav-bar">
                <ul className="nav-menu">
                    <li><a href="index.html" class="nav-links"><b>Home</b></a></li>
                    <li><a href="about.html" class="nav-links"><b>About</b></a></li>
                    <li><a href="contact.html" class="nav-links"><b>Contact Us!</b></a></li>
                </ul>
            </div>
        )
    }
}
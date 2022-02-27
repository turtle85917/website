import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserSlash } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul className="nav-container">
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faHouse} />
                        <a href="/website/">Home</a>
                    </li>
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faUserSlash} />
                        <a href="https://discord.com/api/oauth2/authorize?client_id=947370255259410432&redirect_uri=https%3A%2F%2Fturtle85917.github.io%2Fwebsite%2Fauth&response_type=code&scope=identify%20email">Test</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;
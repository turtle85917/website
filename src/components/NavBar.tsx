import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul className="nav-container">
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faHouse} />
                        <a href="/website/">Home</a>
                    </li>
                    <li className="nav-item-right">
                        <a>Test</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;
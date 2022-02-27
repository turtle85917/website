import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <li className="nav-item">
                    <FontAwesomeIcon icon={faHouse} />
                    <a href="/website/">Home</a>
                </li>

                
            </nav>
        )
    }
}

export default NavBar;
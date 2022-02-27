import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <li className="nav-item">
                    <FontAwesomeIcon icon={"house"} />
                    <a href="/website/">Home</a>
                </li>
            </nav>
        )
    }
}

export default NavBar;
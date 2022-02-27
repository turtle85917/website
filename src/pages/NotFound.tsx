import React from 'react';
import { useMediaQuery } from 'react-responsive';
import NavBar from '../components/NavBar';
import { Mobile, PC } from '../MediaQuery';

const NotFound = () => {
    const isPc = useMediaQuery({
        query: "(min-width:1024px)"
    });
    return (
        <>
            <div>
                <Mobile>
                    <div>
                        Not Found Page!
                    </div>
                </Mobile>
            </div>

            <div>
                <PC>
                    <div>
                        Not Found Page!
                    </div>
                </PC>
            </div>

            <footer>
                <p id={`${isPc?'pc':'mobile'}Copyright`}>Copyright © 2022 website,Ltd. All rights reserved.</p>
            </footer>
        </>
    )
}

export default NotFound;
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Mobile, PC } from '../MediaQuery';

const Main = () => {
    const isPc = useMediaQuery({
        query: "(min-width:1024px)"
    });
    return (
        <>
            <div>
                <Mobile>
                    <div className='mobile_container'>
                        모바일!    
                    </div>
                </Mobile>
            </div>

            <div>
                <PC>
                    <div>
                        Test Message
                    </div>
                </PC>
            </div>

            <footer>
                <p id={`${isPc?'pc':'mobile'}Copyright`}>Copyright © 2022 website,Ltd. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Main;
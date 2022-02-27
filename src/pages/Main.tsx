import React from 'react';
import { Mobile, PC } from '../MediaQuery';

const Main = () => {
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
                <p id="copyright">Copyright © 2022 website,Ltd. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Main;
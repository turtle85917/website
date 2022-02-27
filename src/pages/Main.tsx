import React from 'react';
import { Mobile, PC } from '../MediaQuery';

const Main = () => {
    return (
        <>
            <div id="body-wrapper">
                <Mobile>
                    <div className='mobile_container'>
                        모바일!    
                    </div>
                </Mobile>
            </div>

            <div id="body-wrapper">
                <PC>
                    <div id="body-content">
                        Test Message
                    </div>
                </PC>
            </div>

            <footer className="footerText">
                <p>Copyright © 2018 tcpschool.co.,Ltd. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Main;
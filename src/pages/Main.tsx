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
                    <div className='pc_container'>
                        PC!
                    </div>
                </PC>
            </div>
        </>
    )
}

export default Main;
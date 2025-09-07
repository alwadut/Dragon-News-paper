import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';



const RightNav = () => {
    return (
        <div>
            <div className='space-y-5'>
                <SocialLogin></SocialLogin>
                <FindUs/>
            </div>
           
        </div>

    );
};

export default RightNav;
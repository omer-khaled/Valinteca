import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Welcom() {
    let user = JSON.parse(localStorage.getItem('user'));
    let navigator = useNavigate();
    return (
        <div className='welcom'>
            <div className='img-container'></div>
            <div className='info'>
                <h3>Welcome</h3>
                <p>We’re glad you’re here! Sign up to start</p>
                <button onClick={()=>{
                    if(user!==null){
                        navigator('/success');
                    }else{
                        navigator('/signup');
                    }
                }}>Get Started</button>
            </div>
        </div>
    )
}
export default Welcom;
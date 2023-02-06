import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Success() {
    let user = JSON.parse(localStorage.getItem('user'));
    let navigator = useNavigate();
    useEffect(()=>{
        if(user===null){
            navigator('/');
        }
    },[]);
    return (
        <div className='succes'>
            <div className='img-container'></div>
            <div className='info'>
                <h3>Successfully logged in</h3>
                {(user!==null)&&<p>{user.email}</p>}
            </div>
        </div>
    )
}
export default Success;
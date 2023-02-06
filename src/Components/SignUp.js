import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    let navigator = useNavigate();
    let user = JSON.parse(localStorage.getItem('user'));
    useEffect(()=>{
        if(user!==null){
            navigator('/success');
        }
    },[]);
    const Submit = async()=>{
        validationuser(Username)
        validationEmail(Email);
        validationPassword(Password);
        validationConfirmvalid();
        if(uservalid&&Emailvalid&&Passwordvalid&&Confirmvalid){
            const obj ={
                username:Username,
                email:Email,
                password:Password,
                password_confirmation:Confirm,
            };
            let send = await fetch('https://goldblv.com/api/hiring/tasks/register',{
                method:"POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(obj)
            });
            let res = await send.json();
            if(res.id!==undefined){
                localStorage.setItem("user",JSON.stringify(res));
                sessionStorage.setItem("user",JSON.stringify(res));
                navigator('/success');
            }
        }
    }
    const validationuser = (e)=>{
        let value = e;
        let reg = /^((?!_)[a-zA-z])([a-zA-z0-9](?!_)){3,13}([a-zA-z](?!_))$/;
        if(reg.test(value)){
            setuservalid(true);
            setuuserError('');
        }else{
            setuuserError('should be in this formla (start with character {character or digits (3 to 13)} wnd with character)');
        }
    }
    const validationEmail = (e)=>{
        let value = e;
        let reg = /^\w+(@gmail.com)$/;
        if(reg.test(value)){
            setEmailvalid(true);
            setEmailError('');
        }else{
            setEmailError('should be in this formla (Any_characters@gmail.com)');
        }
    }
    const validationPassword = (e)=>{
        let value = e;
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(reg.test(value)){
            setPasswordvalid(true);
            setPasswordError('');
        }else{
            setPasswordError('should conatin one upper,lower , digi , symbol , at least 8character ');
        }
    }
    const validationConfirmvalid = ()=>{
        if(Confirm===Password && Confirm!==''){
            setConfirmvalid(true);
            setConfirmError('');
        }else{
            setConfirmError('should the same password and not empty');
        }
    }
    const [uservalid,setuservalid] = useState(false);
    const [Emailvalid,setEmailvalid] = useState(false);
    const [Passwordvalid,setPasswordvalid] = useState(false);
    const [Confirmvalid,setConfirmvalid] = useState(false);
    const [Username,setUsername] = useState('');
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const [Confirm,setConfirm] = useState('');
    const [userError,setuuserError] = useState('');
    const [EmailError,setEmailError] = useState('');
    const [PasswordError,setPasswordError] = useState('');
    const [ConfirmError,setConfirmError] = useState('');
    return (
        <div className='signup'>
            <div className='img-container-signup'>
            </div>
            <div className='info'>
                <h3>Create Account</h3>
                <p>Go ahead and sign up, let everyone know how awesome you are!</p>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    Submit();
                }}>
                    <div className='form-controler'>
                        <i className="bi bi-person"></i>
                        <input placeholder='Username' type={"text"} onChange={(e)=>{
                            setUsername(e.target.value);
                        }}/>
                    </div>
                    {(userError!=='')&&<p className='danger'>{userError}</p>}
                    <div className='form-controler'>
                        <i className="bi bi-envelope"></i>
                        <input placeholder='Email' type={"text"} onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                    </div>
                    {(EmailError!=='')&&<p className='danger'>{EmailError}</p>}
                    <div className='form-controler'>
                        <i className="bi bi-lock"></i>
                        <input placeholder='Password' type={"text"} onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>
                    </div>
                    {(PasswordError!=='')&&<p className='danger'>{PasswordError}</p>}
                    <div className='form-controler'>
                        <i className="bi bi-lock"></i>
                        <input placeholder='Confirm password' type={"text"} onChange={(e)=>{
                            setConfirm(e.target.value);
                        }}/>
                    </div>
                    {(ConfirmError!=='')&&<p className='danger'>{ConfirmError}</p>}
                    <button type='submit'>Create Account</button>
                </form>
            </div>
        </div>
    )
}
export default  SignUp;
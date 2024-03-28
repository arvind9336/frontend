import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
const SignUp=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])
    const submitData=async()=>{
        console.log(name,email,password);
        let result=await fetch('http://localhost:3600/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        result=await result.json();
        console.log(result);
        if(result){
            navigate('/');
        }
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
    }
    
    return(
        <div className='register'>
            <h3>Sign Up for E-Commerce Website</h3>
            <input className='inputBox' type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
            <input className='inputBox' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
            <input className='inputBox' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
            <button className='btn' type='button' onClick={submitData} >Sign Up</button>
        </div>
    )
}
export default SignUp;
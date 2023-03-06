import React from 'react'
import './Login.css';
import { loginUrl } from "./melodify";

function Login() {
  return (
    <div className='login'>
      <img src={process.env.PUBLIC_URL + '/melodifylogo.png'} alt="Logo" style={{width: '200px', height: '200px'}} />
      <a href={loginUrl}>LOGIN WITH MELODIFY</a>
    </div>
  )
}

export default Login

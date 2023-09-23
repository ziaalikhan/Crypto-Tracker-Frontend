import React, { useState } from 'react'
import "./Login.css";
import { Input, Button } from 'antd';

const Login = () => {
  return (
    <div className='login_container'>
      <div className='login'>
        <h1>Login</h1>
        <div className='input_container'>
          <label className='inputs_label'>Email : </label>
          <Input placeholder="Enter Your Email" />
        </div>
        <div className='input_container'>
          <label className='inputs_label'>Password : </label>
          <Input.Password placeholder="Enter Your Password" />
        </div>
        <p>Dont Have an Account Sign Up</p>
        <div className='btn_container'>
          <Button type="primary" block>
            Log In
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
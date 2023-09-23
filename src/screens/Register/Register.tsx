import React, { useState } from 'react'
import "./Register.css";
import { Input, Button } from 'antd';

const Register = () => {
  return (
    <div className='register_container'>
      <div className='register'>
        <h1>Register</h1>
        <div className='input_container'>
          <label className='inputs_label'>Email : </label>
          <Input placeholder="Enter Your Email" />
        </div>
        <div className='input_container'>
          <label className='inputs_label'>Password : </label>
          <Input.Password placeholder="Enter Your Password" />
        </div>
        <div className='input_container'>
          <label className='inputs_label'>Confirm Password : </label>
          <Input.Password placeholder="Enter Your Confirm Password" />
        </div>
        <p>Have an Account LogIn</p>
        <div className='btn_container'>
          <Button type="primary" block>
            Register
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Register;
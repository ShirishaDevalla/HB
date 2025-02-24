import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Useformvalidation from './Useformvalidation';
import { getSave } from '../servicesfunction/Services';
import { url } from '../servicesfunction/Url';

const Loginform = () => {
  const navigate = useNavigate();
  const submit = async () => {
    let res = await  getSave(url.login, data);
     console.log("data",res);
    if (res) {
      sessionStorage.setItem("token", res.token);
      navigate("/hospital/dashboard");
    }
  }
  const { handleOnChange, handlesubmit, data} = Useformvalidation({
    submit: submit
  });
  
  useEffect(()=>{
    sessionStorage.clear()
  },[])

return (
    <div className='login-container'>
      <div className='login-form'>
        <h2>Login Form</h2>
        <form onSubmit={handlesubmit}>
          <div className='form-group'>
            <label>Email:</label>
            <input
              className='text-style'
              type='email'
              placeholder='email'
              onChange={handleOnChange("email")}
              value={data.email || ''}
            />
          </div>
          <div className='form-group'>
            <label>Password:</label>
            <input
              className='text-style'
              type='password'
              placeholder='Password'
              onChange={handleOnChange("password")}
              value={data.password || ''}
            />
          </div>
          <div>
            <button type='submit' className='btn'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginform;

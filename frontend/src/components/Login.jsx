import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('logged in');
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className='formcontainer'>
        <form className='details'>
          <input type='email' name='email' value={data.email} onChange={handleChange} placeholder='Enter email address' required autoComplete='off' />{' '}
          <br />
          <input
            type='password'
            name='password'
            value={data.password}
            onChange={handleChange}
            placeholder='enter password'
            autoComplete='off'
            required
          />
          <br />
          <input type='radio' id='prof' name='access' />
          <label htmlFor='prof'>Professor</label>
          <input type='radio' id='student' name='access' />
          <label htmlFor='student'>Student</label>
          <br />
          <input type='submit' value='Login' onClick={handleSubmit} className='btn' />
        </form>
      </div>
    </div>
  );
};

export default Login;

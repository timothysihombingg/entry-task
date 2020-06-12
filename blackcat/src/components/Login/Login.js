import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../../utils/Common';
import './Login.css';
import Logo from '../../assets/svgs/logo-cat.svg'
 
function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
 
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }
 
  return (
    <div className='login'>
      <center> 
        <div className="logo-header">
          <div id="head1">FIND THE MOST LOVED ACTIVITIES</div>
          <div id="head2">BLACK CAT</div>
          <img id="logo-img" src={Logo} alt="blackcat-logo" />
        </div>
        <div className="login-form">
          <input className="input-field" type="text" {...username} autoComplete="new-password" placeholder="Email"/>
          <input className="input-field" type="password" {...password} autoComplete="new-password" placeholder="Password"/>
        </div>
        </center>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <input className="submit" type="button" value={loading ? 'Loading...' : 'SIGN IN'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;
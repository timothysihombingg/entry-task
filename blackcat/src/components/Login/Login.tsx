import * as React from 'react';
import './Login.css';
import Logo from '../../assets/svgs/logo-cat.svg';
 
function Login() {
  return (
    <div className='login'> 
        <div className="logo-header">
          <div id="head1">FIND THE MOST LOVED ACTIVITIES</div>
          <div id="head2">BLACK CAT</div>
          <img src={Logo} alt="blackcat-logo" />
        </div>
        <div className="login-form">
          <input type="text" autoComplete="new-password" placeholder="Email"/>
          <input type="password"  autoComplete="new-password" placeholder="Password"/>
        </div>
        <input className="submit" type="button" value="SIGN IN" /><br />
    </div>
  );
}
 
export default Login;
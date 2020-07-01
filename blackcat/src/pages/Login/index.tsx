import React, { useState } from 'react';
import PageLayout from '../../containers/PageLayout';
import classnames from 'classnames/bind';
import styles from './login.module.scss';
import { useHistory } from 'react-router-dom';
import { ReactComponent as AppLogo } from '../../assets/svgs/logo-cat.svg';
import { ReactComponent as UserIcon } from '../../assets/svgs/user.svg';
import { ReactComponent as PasswordIcon } from '../../assets/svgs/password.svg';
import { setUserStorage } from '../../data/storage';

const cx = classnames.bind(styles)

const Login: React.FunctionComponent<{}> = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <PageLayout className={cx('login-page')}>
      <section className={cx('header')}>
        <h3>FIND THE MOST LOVED ACTIVITIES</h3>
        <h2>BLACK CAT</h2>
        <AppLogo className={cx('app-logo')}/>
      </section>
      <section className={cx('login-form-container')}>
        <div>
          <UserIcon className={cx('login-icon')}/>
          <input type="text" 
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </div>
        <div>
          <PasswordIcon className={cx('login-icon')}/>
          <input type="password" 
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)} />
        </div>
      </section>
      <section className={cx('login-submit')}>
        <button
          onClick={() => {
            fetch('http://localhost:4000/login', {
              method: 'post',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                email: email,
                password: password
              })
            })
            .then(response => response.json())
            .then(data => {
              if (data !== "failed") {
                setUserStorage(data)
                history.push('/home')
              }
            })
          }}>
          SIGN IN
        </button>
      </section>
    </PageLayout>
  );
};

export default Login;
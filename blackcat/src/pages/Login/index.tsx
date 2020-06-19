import React, { useState } from 'react';
import PageLayout from '../../containers/PageLayout';
import classnames from 'classnames/bind';
import styles from './login.module.scss';
import { ReactComponent as AppLogo } from '../../assets/svgs/logo-cat.svg';
import { ReactComponent as UserIcon } from '../../assets/svgs/user.svg';
import { ReactComponent as PasswordIcon } from '../../assets/svgs/password.svg'; 

const cx = classnames.bind(styles)

const Login: React.FunctionComponent<{}> = () => {
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
            console.log(email);
            console.log(password);
          }}>
          SIGN IN
        </button>
      </section>
    </PageLayout>
  );
};

export default Login;
import React from 'react';
import { getUserStorage } from '../../data/storage';
import PageLayout from '../../containers/PageLayout';
import classnames from 'classnames/bind';
import styles from './profile.module.scss';
import { ReactComponent as Info } from '../../assets/svgs/info-outline.svg';
import { ReactComponent as Comment } from '../../assets/svgs/comment-outline.svg';
import { ReactComponent as People } from '../../assets/svgs/people-outline.svg';
import { ReactComponent as NoActivity } from '../../assets/svgs/no-activity.svg';
import { ReactComponent as Email } from '../../assets/svgs/email.svg';
import { connect } from 'react-redux';
import Bar from '../../components/Bar/Bar';
import { setOn } from '../../modules/posts/action';
import { RootState } from '../../modules'

interface Props {
  isOn: string,
  setOn: Function
}

const mapStateToProps = (state: RootState) => {
  return {
    isOn: state.activity.isOn
  }
}

const Profile: React.FunctionComponent<Props> = ({
  isOn,
  setOn
}) => {
  const cx = classnames.bind(styles)
  const user = getUserStorage()

  return (
    <PageLayout>
      <Bar />
      <div className={cx('profile-header')}>
        <img src={user.profile_picture} alt="profile-picture" />
        <span>{user.username}</span>
        <div>
          <Email className={cx('email-profile')}/>
          <span>{user.email}</span>
        </div>
      </div>
      <hr />
      <div className={cx('details-bar')}>
        <div className={isOn === 'info' ? cx('bar-btn-on') : cx('bar-btn-off')} onClick={() => setOn('info')}>
          <Info className={isOn === 'info' ? cx('bar-img-on') : cx('bar-img-off')}/>
          <button>{user.likes.length} Likes</button>
        </div>
        <div className={isOn === 'participant' ? cx('bar-btn-on') : cx('bar-btn-off')} onClick={() => {
          setOn('participant');
        }}>
          <People className={isOn === 'participant' ? cx('bar-img-on') : cx('bar-img-off')}/>
          <button>{user.going.length} Going</button>
        </div>
        <div className={isOn === 'comment' ? cx('bar-btn-on') : cx('bar-btn-off')} onClick={() => {
          setOn('comment');
        }}>
          <Comment className={isOn === 'comment' ? cx('bar-img-on') : cx('bar-img-off')}/>
          <button>{user.going.length} Past</button>
        </div>
      </div>
      <hr />
      <div className={cx('profile-activity')}>
          <NoActivity className={cx('no-activity')}/>
          <p>No activity found</p>
        </div>
    </PageLayout>
  );
};

export default connect(mapStateToProps, {setOn})(Profile);
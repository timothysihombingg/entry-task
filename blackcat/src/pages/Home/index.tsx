import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classname from 'classnames/bind'

import PageLayout from '../../containers/PageLayout';
import Activity from '../../components/Activity/Activity';
import Header from '../../components/Bar/Bar';
import Search from '../../components/Search/Search';

import { IActivity } from '../../types/activity.types';
import { RootState } from '../../modules';

import * as postActions from '../../modules/posts/action';
import * as userActions from '../../modules/user/action';

import style from './home.module.scss';

const cx = classname.bind(style);

interface IDispatchToProps {
  startFetchPost: Function,
  likePost: Function,
  fetchParticipated: Function,
  fetchLiked: Function,
  participatePost: Function
};

interface IMapStateToProps {
  activities: IActivity[], 
  loading: boolean,
  likes: number[],
  participated: number[],
}

type TProps = IDispatchToProps & IMapStateToProps

const mapStatetoProps = (state: RootState) => {
  return {
    activities: state.post.posts,
    loading: state.post.loading,
    likes: state.user.liked,
    participated: state.user.participated
  }
}

const Home: React.FunctionComponent<TProps> = ({
  startFetchPost,
  likePost,
  fetchParticipated,
  fetchLiked,
  participatePost,
  activities,
  loading,
  likes,
  participated
}: TProps) => {

  useEffect(() => {
    startFetchPost();
    fetchParticipated();
    fetchLiked();
  }, [startFetchPost, fetchParticipated, fetchLiked]);

  return (
    <PageLayout className={cx('home-page')}>
      { false ? (
        <div className={cx('search-bar')}>
          <Search />
        </div>
      ) : (<div></div>)}
      <div style={{width: '320px'}}>
        <Header />
          {activities.map(post => (
            <Activity 
              activity={post}
              isLiked={likes.includes(post.id)}
              isParticipated={participated.includes(post.id)}
              likePost={likePost}
              participatePost={participatePost}
            />
          ))}
      </div>
    </PageLayout>
  );
};

export default connect(mapStatetoProps, {...postActions, ...userActions})(Home);
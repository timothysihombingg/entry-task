import React, { useState, useEffect } from 'react';
import PageLayout from '../../containers/PageLayout';
import Activity from '../../components/Activity/Activity';
import Header from '../../components/Bar/Bar';
import { IActivity } from '../../types/activity.types';
import { RootState } from '../../modules';
import * as postActions from '../../modules/posts/action';
import * as userActions from '../../modules/user/action';
import { connect } from 'react-redux';
import { getUserStorage, setLikedStorage } from '../../data/storage';

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
    <PageLayout>
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
    </PageLayout>
  );
};

export default connect(mapStatetoProps, {...postActions, ...userActions})(Home);
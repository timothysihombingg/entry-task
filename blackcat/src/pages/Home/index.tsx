import React, { useState, useEffect } from 'react';
import PageLayout from '../../containers/PageLayout';
import Activity from '../../components/Activity/Activity';
import Header from '../../components/Bar/Bar';
import { IActivity } from '../../types/activity.types';
import { IPostState } from '../../modules/posts/reducer';
import * as postActions from '../../modules/posts/action';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// const mapDispatchtoProps = (dispatch: Dispatch) => {
//   return {
//     onRequestPosts: () => requestActivities(dispatch)
//   }
// }

interface IDispatchToProps {
  startFetchPost: Function
};

interface IMapStateToProps {
  activities: IActivity[], 
  loading: boolean
}

type TProps = IDispatchToProps & IMapStateToProps

const mapStatetoProps = (state: IPostState) => {
  return {
    activities: state.posts,
    loading: state.loading
  }
}

const Home: React.FunctionComponent<TProps> = ({
  startFetchPost, activities, loading
}: TProps) => {

  useEffect(() => {
    // onRequestPosts();
    startFetchPost()
    }, [startFetchPost]);
  // }
  // , [activities, isPending]);

  return (
    <PageLayout>
      <Header />
        {activities.map(post => (
          <Activity activity={post}/>
        ))}
    </PageLayout>
  );
};

export default connect(mapStatetoProps, {...postActions})(Home);
// export default connect(mapStatetoProps, {requestActivities})(Home);
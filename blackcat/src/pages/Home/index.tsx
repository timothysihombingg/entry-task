import React, { useState, useEffect } from 'react';
import PageLayout from '../../containers/PageLayout';
import Activity from '../../components/Activity/Activity';
import Header from '../../components/Bar/Bar';
import { IActivity } from '../../types/activity.types';
import { postState } from '../../modules/posts/reducer';
import { User } from '../../types/user.types';
import { requestActivities } from '../../modules/posts/action';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapDispatchtoProps = (dispatch: Dispatch) => {
  return {
    onRequestPosts: () => requestActivities(dispatch)
  }
}

interface IDispatchToProps {
  onRequestPosts: Function
};

interface IMapStateToProps {
  activities: IActivity[], isPending: boolean, error: string
}

type TProps = IDispatchToProps & IMapStateToProps

const mapStatetoProps = (state: postState) => {
  return {
    activities: state.activities,
    isPending: state.isPending,
    error: state.error
  }
}

const Home: React.FunctionComponent<TProps> = ({
  onRequestPosts, activities, isPending, error
}) => {
  useEffect(() => {
    onRequestPosts();
  }, [activities]);

  return (
    <PageLayout>
      <Header />
      {activities.map(activity => (
        <div>
          <Activity activity1={activity}/>
          <hr />
        </div>
      ))}
    </PageLayout>
  );
};


export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
// export default connect(mapStatetoProps, {requestActivities})(Home);
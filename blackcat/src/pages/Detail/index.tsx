import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classname from 'classnames/bind';
import styles from './detail.module.scss';
import { IActivity } from '../../types/activity.types';
import PageLayout from '../../containers/PageLayout';
import Bar from '../../components/Bar/Bar';
import Header from '../../components/Details/Head/DetailHeader';
import TimePlace from '../../components/Details/TimePlace/TimePlace';
import Participants from '../../components/Details/Participants/Participants';
import Comment from '../../components/Details/Comment/Comment';
import DetailsBar from '../../components/Details/Bar/Bar';
import { startFetchPostDetail }  from '../../modules/posts/action';
import { connect } from 'react-redux';
import { RootState } from '../../modules';


const cx = classname.bind(styles)

interface Props {
  startFetchPostDetail: Function,
  setOn: Function,
  activity: IActivity,
  isOn: string
};

const mapStatetoProps = (state: RootState) => {
  return {
    activity: state.activity.post,
    isOn: state.activity.isOn
  }
}

const Detail: React.FunctionComponent<Props> = ({
  startFetchPostDetail,
  activity,
  isOn,
  setOn
}: Props) => {
  let { id } = useParams();
  let detailComponent;

  useEffect(() => {
    startFetchPostDetail(id);
  }, [startFetchPostDetail]);

  if (isOn == "info") {
    detailComponent = (
      <div>
        <p>{activity.description}</p>
        <hr />
        <TimePlace activity1={activity} />
        <hr />
        <Participants activity1={activity} />
        <hr />
        <br />
        {activity.comments.map((comment) =>
          <div>
            <Comment comment={comment}/>
            <br/>
        </div>
        )}
        <hr />
      </div>
    )
  } else if (isOn == "participant") {
    detailComponent = (
      <div>
        <Participants activity1={activity} />
        <hr />
      </div>
    )
  } else {
    detailComponent = (
      <div>
        <br />
        {activity.comments.map((comment) =>
          <div>
            <Comment comment={comment}/>
            <br/>
          </div>
        )}
        <hr />
      </div>
    )
  }

  return (
    <PageLayout>
      <Bar />
      <div className={cx("details-container")}>
        <Header activity1={activity} />
        <div className={cx('details-bar')}>
          <hr className={cx('top-hr')}/>
          <DetailsBar />
          <hr />
        </div>
        {detailComponent}
      </div>
    </PageLayout>
  );
};

export default connect(mapStatetoProps, { startFetchPostDetail })(Detail);
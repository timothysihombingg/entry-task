import React from 'react';
import style from './detailsbar.module.scss';
import classname from 'classnames/bind';
import { ReactComponent as Info } from '../../../assets/svgs/info-outline.svg';
import { ReactComponent as Comment } from '../../../assets/svgs/comment-outline.svg';
import { ReactComponent as People } from '../../../assets/svgs/people-outline.svg';
import { setOn }  from '../../../modules/posts/action';
import { IPostDetailState } from '../../../modules/posts/post_detail/reducer';
import { connect } from 'react-redux';

const cx = classname.bind(style);

interface Props {
  isOn: string,
  setOn: Function
}

const mapStatetoProps = (state: IPostDetailState) => {
  return {
    isOn: state.isOn
  }
}

const DetailsBar: React.FunctionComponent<Props> = ({ 
  isOn,
  setOn
}: Props) => {
  return (
    <div className={cx('details-bar')}>
      <div className={isOn === 'info' ? cx('bar-btn-on') : cx('bar-btn-off')} onClick={() => setOn('info')}>
        <Info className={isOn === 'info' ? cx('bar-img-on') : cx('bar-img-off')}/>
        <button>Details</button>
      </div>
      <div className={isOn === 'participant' ? cx('bar-btn-on') : cx('bar-btn-off')} onClick={() => {
        setOn('participant');
      }}>
        <People className={isOn === 'participant' ? cx('bar-img-on') : cx('bar-img-off')}/>
        <button>Participants</button>
      </div>
      <div className={isOn === 'comment' ? cx('bar-btn-on') : cx('bar-btn-off')} onClick={() => {
        setOn('comment');
      }}>
        <Comment className={isOn === 'comment' ? cx('bar-img-on') : cx('bar-img-off')}/>
        <button>Comments</button>
      </div>
    </div>
  );
};

export default connect(mapStatetoProps, { setOn })(DetailsBar);
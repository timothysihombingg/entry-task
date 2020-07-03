import React from 'react';
import style from './comment.module.scss';
import classname from 'classnames/bind';
import { ReactComponent as Reply } from '../../../assets/svgs/reply.svg';

const cx = classname.bind(style);

interface Props {
  comment: {
    username: string,
    profile_picture: string,
    comment: string
  };
}

const Comment: React.FunctionComponent<Props> = ({
  comment
}) => {
  return (
    <div className={cx('comment')}>
      <img src={comment.profile_picture}/>
      <div>
        <span>{comment.username}</span>
        <span className={cx('comment-time')}>9 hours ago</span>
        <p>{comment.comment}</p>
      </div>
      <Reply className={cx('reply-icon')}/>
    </div>
  );
};

export default Comment;
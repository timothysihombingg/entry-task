import React from 'react';
import style from './comment.module.scss';
import classname from 'classnames/bind';
import { User } from '../../../types/user.types';
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
        <p>{comment.comment}</p>
      </div>
      <Reply />
    </div>
  );
};

export default Comment;
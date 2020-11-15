import React from 'react';
import style from './FriendItem.module.css';

const getProgressColor = (position) => {
  if ([1,2,3].includes(position)) {
    return 'success';
  } else if ([4,5,6].includes(position)) {
    return 'warning';
  } else if ([7,8,9].includes(position)) {
    return 'primary';
  }

  return 'danger';
};

const FriendItem = ({friend, position}) => (
  <div className={style.wrapper}>
    <div className={style.position}>
      {position}.
    </div>
    <div className={style.content}>
      <div className={style.name}>
        {friend.name}
      </div>
      <div className="progress">
        <div
          className={`progress-bar progress-bar-striped bg-${getProgressColor(position)}`}
          role="progressbar"
          style={{width: `${friend.progress}%`}}
          aria-valuenow={`${friend.progress}`}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  </div>
);

export default FriendItem;

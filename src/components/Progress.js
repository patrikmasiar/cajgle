import React from 'react';
import style from './Progress.module.css';

const Progress = () => (
  <div className={style.wrapper}>
    <div className={style.progressWrapper}>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-primary"
          role="progressbar"
          style={{width: '75%'}}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
    <div className={style.startFlag} />
    <div className={style.target} />
    <div className={style.bicycle} />
  </div>
);

export default Progress;

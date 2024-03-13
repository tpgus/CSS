import React from 'react';
import classNames from 'classnames/bind';

import styles from './A.module.scss';

const cx = classNames.bind(styles);

const A = () => {
  return (
    <div className={cx('container')}>
      <section></section>
      <div className={cx('text')}>
        <h2>
          Welcome To
          <br />
          <span>Thailand</span>
        </h2>
      </div>
      <section className={cx('section2')}></section>
    </div>
  );
};

export default A;

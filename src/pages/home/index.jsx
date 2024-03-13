import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Page = () => {
  const navigate = useNavigate();

  return (
    <div className={cx('container')}>
      <button type="button" onClick={() => navigate('/scroll-interaction1')}>
        스크롤 인터랙션
      </button>
    </div>
  );
};

export default Page;

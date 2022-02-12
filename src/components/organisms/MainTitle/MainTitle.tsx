import React from 'react';
import './MainTitle.scss';

export interface MainTitleProps {}

const MainTitle: React.FC<MainTitleProps> = ({}) => {
  return (
    <div className='main-title'>
      <div className='main-title__profile' />
      <h1>
        <strong>사용자 중심.</strong>
        <br />웹 프론트엔드 개발자 <br />
        김재환
      </h1>
    </div>
  );
};

export default MainTitle;

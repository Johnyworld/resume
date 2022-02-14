import React from 'react';
import './Title.scss';

export interface TitleProps {}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className='title'>
      <h2 className='title__title'>{children}</h2>
    </div>
  );
};

export default Title;

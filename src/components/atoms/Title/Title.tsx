import React from 'react';
import './Title.scss';

export interface TitleProps {}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h2 className='title'>{children}</h2>;
};

export default Title;

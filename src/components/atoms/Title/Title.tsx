import React from 'react';
import './Title.scss';

export interface TitleProps {}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className='title'>
      <h2 className='title__title'>{children}</h2>
      <div className='title__element'>
        {/* <svg width='38' height='10' viewBox='0 0 62 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M59 3L53.4215 8.81584C50.4176 11.9474 46.9847 11.5001 44.41 8.81584L41.4061 5.46055C38.8314 2.77631 35.3985 2.32894 32.3946 5.46055L29.1762 8.81584C26.1724 11.9474 22.7395 11.5001 20.1648 8.81584L17.1609 5.46055C14.5862 2.77631 11.1533 2.32894 8.14943 5.46055L3 10.829'
            stroke='#587CFF'
            stroke-width='6'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg> */}
        <svg width='6' height='6' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='5' cy='5' r='5' fill='#7472ff' />
        </svg>
      </div>
    </div>
  );
};

export default Title;

import React from 'react';
import { Introduce } from 'types';
import './Introduces.scss';

export interface IntroducesProps {
  introduces: Introduce[];
}

const Introduces: React.FC<IntroducesProps> = ({ introduces }) => {
  return (
    <div className='introduces'>
      {introduces.map(introduce => (
        <div className='introduces__item' key={introduce.title || introduce.desc}>
          {introduce.title && <h4 className='introduces__title'>{introduce.title}</h4>}
          <p className='introduces__desc'>{introduce.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Introduces;

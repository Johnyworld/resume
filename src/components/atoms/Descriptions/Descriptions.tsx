import React from 'react';
import { Description } from 'types';
import './Descriptions.scss';

export interface DescriptionsProps {
  descriptions: Description[];
}

const Descriptions: React.FC<DescriptionsProps> = ({ descriptions }) => {
  return (
    <div className='descriptions'>
      {descriptions.map(description => (
        <dl key={description.title} className='descriptions__item'>
          <dt className='descriptions__title'>{description.title}</dt>
          {description.href ? (
            <dd className='descriptions__desc'>
              <a target='_blank' href={description.href} rel='noreferrer'>
                {description.desc}
              </a>
            </dd>
          ) : (
            <dd className='descriptions__desc'>{description.desc}</dd>
          )}
        </dl>
      ))}
    </div>
  );
};

export default Descriptions;

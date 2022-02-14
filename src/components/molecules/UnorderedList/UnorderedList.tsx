import React from 'react';
import { UnorderedItem } from 'types';
import './UnorderedList.scss';

export interface UnorderedListProps {
  list: UnorderedItem[];
}

const UnorderedList: React.FC<UnorderedListProps> = ({ list }) => {
  return (
    <ul className='unordered-list'>
      {list.map(item =>
        typeof item === 'string' ? (
          <li key={item} className='unordered-list__item'>
            {item}
          </li>
        ) : (
          <li key={item.content} className='unordered-list__item'>
            <a target={item.link} href={item.link} rel='noreferrer'>
              {item.content}
            </a>
          </li>
        )
      )}
    </ul>
  );
};

export default UnorderedList;

import React from 'react';
import './UnorderedList.scss';

export interface UnorderedListProps {
  list: string[];
}

const UnorderedList: React.FC<UnorderedListProps> = ({ list }) => {
  return (
    <ul className='unordered-list'>
      {list.map((item, i) => (
        <li key={item} className='unordered-list__item'>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default UnorderedList;

import React from 'react';
import './DescGrid.scss';

export interface DescGridProps {}

const DescGrid: React.FC<DescGridProps> = ({ children }) => {
  return <div className='desc-grid'>{children}</div>;
};

export default DescGrid;

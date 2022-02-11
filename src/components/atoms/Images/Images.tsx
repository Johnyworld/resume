import React from 'react';
import { ImageType } from 'types';
import Image from '../Image';
import './Images.scss';

export interface ImagesProps {
  images: ImageType[];
}

const Images: React.FC<ImagesProps> = ({ images }) => {
  return (
    <div className='images'>
      {images.map(image => (
        <Image key={image.alt} image={image} />
      ))}
    </div>
  );
};

export default Images;

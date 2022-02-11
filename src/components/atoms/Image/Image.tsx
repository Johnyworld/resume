import React, { useContext } from 'react';
import { ImageType } from 'types';
import ModalContext from '../../../utils/modal/modal.context';
import './Image.scss';

export interface ImageProps {
  image: ImageType;
}

const Image: React.FC<ImageProps> = ({ image }) => {
  const { alt, src } = image;
  const { open } = useContext(ModalContext);
  const handleClick = () => open(src);
  return <img className='image' alt={alt} src={src} onClick={handleClick} />;
};

export default Image;

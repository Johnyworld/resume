import React from 'react';
import './ImageModal.scss';

export interface ImageModalProps {
  src: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, onClose }) => {
  return (
    <div className='image-modal' onClick={onClose}>
      <div className='image-modal__dim' />
      <img className='image-modal__image' src={src} alt='modal' />
    </div>
  );
};

export default ImageModal;

import React, { useContext } from 'react';
import { ModalContext } from '../../../App';
import Portal from '../../../Portal';
import './ImageModal.scss';

export interface ImageModalProps {}

const ImageModal: React.FC<ImageModalProps> = ({}) => {
  const { src, reset } = useContext(ModalContext);
  return !src ? null : (
    <Portal>
      <div className='image-modal' onClick={reset}>
        <div className='image-modal__dim' />
        <img className='image-modal__image' src={src} alt='modal' />
      </div>
    </Portal>
  );
};

export default ImageModal;

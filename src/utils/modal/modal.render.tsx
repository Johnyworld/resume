import React, { useContext } from 'react';
import ImageModal from '../../components/organisms/ImageModal';
import Portal from '../Portal';
import ModalContext from './modal.context';

export interface ImageModalProps {}

const ModalRender: React.FC<ImageModalProps> = ({}) => {
  const { src, reset } = useContext(ModalContext);
  return !src ? null : (
    <Portal>
      <ImageModal src={src} onClose={reset} />
    </Portal>
  );
};

export default ModalRender;

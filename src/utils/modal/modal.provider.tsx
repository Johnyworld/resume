import { useState } from 'react';
import ModalContext from './modal.context';

const ModalContextProvider: React.FC = ({ children }) => {
  const [src, setSrc] = useState('');
  const reset = () => setSrc('');
  const open = (image: string) => setSrc(image);
  return <ModalContext.Provider value={{ src, reset, open }}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;

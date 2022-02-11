import { createContext } from 'react';

const ModalContext = createContext({
  src: '',
  reset: () => {},
  open: (image: string) => {},
});

export default ModalContext;

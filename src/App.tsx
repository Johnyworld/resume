import { createContext, useState } from 'react';
import ImageModal from './components/organisms/ImageModal';
import OtherExperiencesSection from './sections/OtherExperiencesSection';
import SideProjectsSection from './sections/SideProjectsSection';
import SkillSection from './sections/SkillsSection';
import TitleSection from './sections/TitleSection';
import ToyProjectsSection from './sections/ToyProjectsSection';
import WorkExperiencesSection from './sections/WorkExperiencesSection';

export const ModalContext = createContext({
  src: '',
  reset: () => {},
  open: (image: string) => {},
});

const ModalContextProvider: React.FC = ({ children }) => {
  const [src, setSrc] = useState('');
  const reset = () => setSrc('');
  const open = (image: string) => setSrc(image);
  return <ModalContext.Provider value={{ src, reset, open }}>{children}</ModalContext.Provider>;
};

function App() {
  return (
    <ModalContextProvider>
      <div className='App'>
        <TitleSection />
        <SkillSection />
        <WorkExperiencesSection />
        <SideProjectsSection />
        <ToyProjectsSection />
        <OtherExperiencesSection />
      </div>
      <ImageModal />
    </ModalContextProvider>
  );
}

export default App;

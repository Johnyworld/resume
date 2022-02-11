import OtherExperiencesSection from './sections/OtherExperiencesSection';
import SideProjectsSection from './sections/SideProjectsSection';
import SkillSection from './sections/SkillsSection';
import TitleSection from './sections/TitleSection';
import ToyProjectsSection from './sections/ToyProjectsSection';
import WorkExperiencesSection from './sections/WorkExperiencesSection';
import ModalContextProvider from './utils/modal/modal.provider';
import ModalRender from './utils/modal/modal.render';

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
      <ModalRender />
    </ModalContextProvider>
  );
}

export default App;

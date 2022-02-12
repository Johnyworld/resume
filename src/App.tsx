import OtherExperienceSection from './sections/OtherExperienceSection';
import SideProjectsSection from './sections/SideProjectsSection';
import SkillSection from './sections/SkillsSection';
import TitleSection from './sections/TitleSection';
import ToyProjectsSection from './sections/ToyProjectsSection';
import WorkExperienceSection from './sections/WorkExperienceSection';
import ModalContextProvider from './utils/modal/modal.provider';
import ModalRender from './utils/modal/modal.render';

function App() {
  return (
    <ModalContextProvider>
      <div className='App'>
        <TitleSection />
        <SkillSection />
        <WorkExperienceSection />
        <SideProjectsSection />
        <ToyProjectsSection />
        <OtherExperienceSection />
      </div>
      <ModalRender />
    </ModalContextProvider>
  );
}

export default App;

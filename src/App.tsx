import SkillSection from './sections/SkillsSection';
import TitleSection from './sections/TitleSection';
import WorkExperienceSection from './sections/WorkExperienceSection';
import ModalContextProvider from './utils/modal/modal.provider';
import ModalRender from './utils/modal/modal.render';

import { OtherExperienceSection } from './sections/OtherExperience';
import { ToyProjectSection } from './sections/ToyProject';

function App() {
  return (
    <ModalContextProvider>
      <div className='App'>
        <TitleSection />
        <SkillSection />
        <WorkExperienceSection />
        <ToyProjectSection />
        <OtherExperienceSection />
      </div>
      <ModalRender />
    </ModalContextProvider>
  );
}

export default App;

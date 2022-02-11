import OtherExperiencesSection from './sections/OtherExperiencesSection';
import SideProjectsSection from './sections/SideProjectsSection';
import SkillSection from './sections/SkillsSection';
import TitleSection from './sections/TitleSection';
import ToyProjectsSection from './sections/ToyProjectsSection';
import WorkExperiencesSection from './sections/WorkExperiencesSection';

function App() {
  return (
    <div className='App'>
      <TitleSection />
      <SkillSection />
      <WorkExperiencesSection />
      <SideProjectsSection />
      <ToyProjectsSection />
      <OtherExperiencesSection />
    </div>
  );
}

export default App;

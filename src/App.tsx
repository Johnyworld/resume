import SideProjectsSection from './sections/SideProjectsSection';
import SkillSection from './sections/SkillsSection';
import TitleSection from './sections/TitleSection';
import WorkExperiencesSection from './sections/WorkExperiencesSection';

function App() {
  return (
    <div className='App'>
      <TitleSection />
      <SkillSection />
      <WorkExperiencesSection />
      <SideProjectsSection />
    </div>
  );
}

export default App;

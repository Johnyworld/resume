import MarkdownSection from "./sections/MarkdownSection";
import SkillSection from "./sections/SkillsSection";
import TitleSection from "./sections/TitleSection";
import WorkExperienceSection from "./sections/WorkExperienceSection";
import ModalContextProvider from "./utils/modal/modal.provider";
import ModalRender from "./utils/modal/modal.render";
import { sideProjects } from "./data/SideProjectsSection.data";
import { toyProjects } from "./data/ToyProjectsSection.data";
import { otherExperience } from "./data/OtherExperienceSection.data";

function App() {
  return (
    <ModalContextProvider>
      <div className="App">
        <TitleSection />
        <SkillSection />
        <WorkExperienceSection />
        <MarkdownSection title="Side Projects." markdown={sideProjects} />
        <MarkdownSection title="Toy Projects." markdown={toyProjects} />
        <MarkdownSection
          title="Other Experience | Education."
          markdown={otherExperience}
        />
      </div>
      <ModalRender />
    </ModalContextProvider>
  );
}

export default App;

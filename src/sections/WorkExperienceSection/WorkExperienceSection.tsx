import React from "react";
import Title from "../../components/atoms/Title";
import WorkExperience from "../../components/organisms/WorkExperience";
import Section from "../../components/wrappers/Section";
import { workExp } from "../../data/WorkExperienceSection.data";

interface Props {
  pageBreak?: boolean;
}

const WorkExperienceSection = ({ pageBreak }: Props) => {
  return (
    <Section pageBreak={pageBreak}>
      <Title>Work Experience.</Title>
      {workExp.map((exp) => (
        <WorkExperience key={exp.company} workExp={exp} />
      ))}
    </Section>
  );
};

export default WorkExperienceSection;

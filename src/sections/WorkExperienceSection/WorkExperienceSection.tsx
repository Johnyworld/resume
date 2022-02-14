import React from 'react';
import Title from '../../components/atoms/Title';
import WorkExperience from '../../components/organisms/WorkExperience';
import Section from '../../components/wrappers/Section';
import { workExp } from './WorkExperienceSection.data';

const WorkExperienceSection: React.FC = () => {
  return (
    <Section pageBreak>
      <Title>Work Experience</Title>
      {workExp.map(exp => (
        <WorkExperience key={exp.company} workExp={exp} />
      ))}
    </Section>
  );
};

export default WorkExperienceSection;

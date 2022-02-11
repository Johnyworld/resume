import React from 'react';
import Title from '../components/atoms/Title';
import WorkExperience from '../components/organisms/WorkExperience';
import Section from '../components/wrappers/Section';
import { workExps } from './WorkExperiencesSection.data';

const WorkExperiencesSection: React.FC = () => {
  return (
    <Section>
      <Title>Work Experiences</Title>
      {workExps.map(workExp => (
        <WorkExperience key={workExp.company} workExp={workExp} />
      ))}
    </Section>
  );
};

export default WorkExperiencesSection;

import React from 'react';
import Title from '../components/atoms/Title';
import Projects from '../components/organisms/Projects';
import DescGrid from '../components/wrappers/DescGrid';
import Section from '../components/wrappers/Section';
import { workExps } from './WorkExperiencesSection.data';

export interface WorkExperiencesSectionProps {}

const WorkExperiencesSection: React.FC<WorkExperiencesSectionProps> = ({}) => {
  return (
    <Section>
      <Title>Work Experiences</Title>
      {workExps.map(workExp => (
        <DescGrid>
          <div>
            <h3>{workExp.company}</h3>
            <p>{workExp.position}</p>
            <p>
              {workExp.from} - {workExp.to}
            </p>
          </div>
          <Projects projects={workExp.projects} />
        </DescGrid>
      ))}
    </Section>
  );
};

export default WorkExperiencesSection;

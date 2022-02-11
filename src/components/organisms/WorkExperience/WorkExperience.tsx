import React from 'react';
import { WorkExp } from 'types';
import DescGrid from '../../wrappers/DescGrid';
import Projects from '../Projects';

export interface WorkExperienceProps {
  workExp: WorkExp;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ workExp }) => {
  const { company, position, from, to, projects } = workExp;
  return (
    <DescGrid key={company}>
      <div>
        <h3>{company}</h3>
        <p>{position}</p>
        <p>
          {from} - {to}
        </p>
      </div>
      <Projects projects={projects} />
    </DescGrid>
  );
};

export default WorkExperience;

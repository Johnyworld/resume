import React from 'react';
import { WorkExp } from 'types';
import DescGrid from '../../wrappers/DescGrid';
import Projects from '../Projects';
import './WorkExperience.scss';

export interface WorkExperienceProps {
  workExp: WorkExp;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ workExp }) => {
  const { company, position, from, to, projects } = workExp;
  return (
    <DescGrid key={company}>
      <div className='work-experience'>
        <h3 className='work-experience__company-name'>{company}</h3>
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

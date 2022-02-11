import React from 'react';
import { Project as ProjectInterface } from 'types';
import Project from '../Project';
import './Projects.scss';

export interface ProjectsProps {
  projects: ProjectInterface[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className='projects'>
      {projects.map(project => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
};

export default Projects;

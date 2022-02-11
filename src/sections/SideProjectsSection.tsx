import React from 'react';
import Title from '../components/atoms/Title';
import Project from '../components/organisms/Project';
import Section from '../components/wrappers/Section';
import { sideProjects } from './SideProjectsSection.data';

const SideProjectsSection: React.FC = () => {
  return (
    <Section>
      <Title>Side Projects</Title>
      {sideProjects.map(project => (
        <Project project={project} />
      ))}
    </Section>
  );
};

export default SideProjectsSection;

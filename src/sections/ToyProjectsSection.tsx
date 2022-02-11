import React from 'react';
import Title from '../components/atoms/Title';
import Project from '../components/organisms/Project';
import Section from '../components/wrappers/Section';
import { toyProjects } from './ToyProjectsSection.data';

const ToyProjectsSection: React.FC = () => {
  return (
    <Section>
      <Title>Toy Projects</Title>
      {toyProjects.map(project => (
        <Project key={project.name} project={project} />
      ))}
    </Section>
  );
};

export default ToyProjectsSection;

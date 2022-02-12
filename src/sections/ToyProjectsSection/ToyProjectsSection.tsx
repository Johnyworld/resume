import React from 'react';
import Title from '../../components/atoms/Title';
import Projects from '../../components/organisms/Projects';
import Section from '../../components/wrappers/Section';
import { toyProjects } from './ToyProjectsSection.data';

const ToyProjectsSection: React.FC = () => {
  return (
    <Section>
      <Title>Toy Projects</Title>
      <Projects projects={toyProjects} />
    </Section>
  );
};

export default ToyProjectsSection;

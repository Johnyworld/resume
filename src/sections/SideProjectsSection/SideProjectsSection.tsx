import React from 'react';
import Title from '../../components/atoms/Title';
import Projects from '../../components/organisms/Projects';
import Section from '../../components/wrappers/Section';
import { sideProjects } from './SideProjectsSection.data';

const SideProjectsSection: React.FC = () => {
  return (
    <Section pageBreak>
      <Title>Side Projects</Title>
      <Projects projects={sideProjects} />
    </Section>
  );
};

export default SideProjectsSection;

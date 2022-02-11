import React from 'react';
import Title from '../components/atoms/Title';
import Projects from '../components/organisms/Projects';
import Section from '../components/wrappers/Section';
import { otherExperiences } from './OtherExperiencesSection.data';

const OtherExperiencesSection: React.FC = () => {
  return (
    <Section>
      <Title>Other Experiences | Education</Title>
      <Projects projects={otherExperiences} />
    </Section>
  );
};

export default OtherExperiencesSection;

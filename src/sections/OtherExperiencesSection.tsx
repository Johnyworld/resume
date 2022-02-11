import React from 'react';
import Title from '../components/atoms/Title';
import Project from '../components/organisms/Project';
import Section from '../components/wrappers/Section';
import { otherExperiences } from './OtherExperiencesSection.data';

const OtherExperiencesSection: React.FC = () => {
  return (
    <Section>
      <Title>Other Experiences | Education</Title>
      {otherExperiences.map(item => (
        <Project key={item.name} project={item} />
      ))}
    </Section>
  );
};

export default OtherExperiencesSection;

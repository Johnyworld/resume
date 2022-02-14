import React from 'react';
import Title from '../../components/atoms/Title';
import Projects from '../../components/organisms/Projects';
import Section from '../../components/wrappers/Section';
import { otherExperience } from './OtherExperienceSection.data';

const OtherExperienceSection: React.FC = () => {
  return (
    <Section>
      <Title>Other Experience | Education.</Title>
      <Projects projects={otherExperience} />
    </Section>
  );
};

export default OtherExperienceSection;

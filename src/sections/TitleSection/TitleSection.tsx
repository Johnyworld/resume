import React from 'react';
import Descriptions from '../../components/atoms/Descriptions';
import Introduces from '../../components/atoms/Introduces';
import MainTitle from '../../components/organisms/MainTitle';
import Section from '../../components/wrappers/Section';
import { contact, introduce } from './TitleSection.data';

const TitleSection: React.FC = () => {
  return (
    <Section>
      <MainTitle />
      <Introduces introduces={introduce} />
      <Descriptions descriptions={contact} />
    </Section>
  );
};

export default TitleSection;

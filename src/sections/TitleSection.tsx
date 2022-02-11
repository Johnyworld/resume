import React from 'react';
import Descriptions from '../components/atoms/Descriptions';
import Introduces from '../components/atoms/Introduces';
import DescGrid from '../components/wrappers/DescGrid';
import Section from '../components/wrappers/Section';
import { contact, introduce } from './TitleSection.data';

export interface TitleSectionProps {}

const TitleSection: React.FC<TitleSectionProps> = () => {
  return (
    <Section>
      <div>
        <h1>사용자 중심.</h1>
        <h2>웹 프론트엔드 개발자 김재환이에요.</h2>
      </div>
      <Introduces introduces={introduce} />
      <Descriptions descriptions={contact} />
    </Section>
  );
};

export default TitleSection;

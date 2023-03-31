import React from "react";
import Title from "../../components/atoms/Title";
import DescGrid from "../../components/wrappers/DescGrid";
import Section from "../../components/wrappers/Section";
import { backend, frontend } from "../../data/SkillsSection.data";

interface Props {
  pageBreak?: boolean;
}

const SkillsSection = ({ pageBreak }: Props) => {
  return (
    <Section pageBreak={pageBreak}>
      <Title>Skills.</Title>
      <DescGrid>
        <h4>Frontend</h4>
        <p>{frontend.join(" | ")}</p>
      </DescGrid>
      <DescGrid>
        <h4>Backend & DevObs</h4>
        <p>{backend.join(" | ")}</p>
      </DescGrid>
    </Section>
  );
};

export default SkillsSection;

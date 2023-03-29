import React from "react";
import Markdown from "../../components/atoms/Markdown";
import MainTitle from "../../components/organisms/MainTitle";
import Section from "../../components/wrappers/Section";
import { introduce } from "../../data/TitleSection.data";

const TitleSection: React.FC = () => {
  return (
    <Section>
      <MainTitle />
      <Markdown>{introduce}</Markdown>
    </Section>
  );
};

export default TitleSection;

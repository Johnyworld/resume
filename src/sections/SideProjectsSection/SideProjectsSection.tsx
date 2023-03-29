import React from "react";
import Markdown from "../../components/atoms/Markdown";
import Title from "../../components/atoms/Title";
import Section from "../../components/wrappers/Section";
import { sideProjects } from "./SideProjectsSection.data";

const SideProjectsSection: React.FC = () => {
  return (
    <Section pageBreak>
      <Title>Side Projects.</Title>
      <Markdown>{sideProjects}</Markdown>
    </Section>
  );
};

export default SideProjectsSection;

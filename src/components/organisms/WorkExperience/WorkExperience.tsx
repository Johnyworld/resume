import React from "react";
import { WorkExp } from "types";
import Markdown from "../../atoms/Markdown";
import DescGrid from "../../wrappers/DescGrid";
import "./WorkExperience.scss";

export interface WorkExperienceProps {
  workExp: WorkExp;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ workExp }) => {
  const { company, position, from, to, content } = workExp;
  return (
    <DescGrid key={company}>
      <div className="work-experience">
        <h3 className="work-experience__company-name">{company}</h3>
        <p>{position}</p>
        <p>
          {from} - {to}
        </p>
      </div>
      <Markdown>{content}</Markdown>
    </DescGrid>
  );
};

export default WorkExperience;

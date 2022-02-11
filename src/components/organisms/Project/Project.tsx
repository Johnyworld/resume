import React from 'react';
import { Project as ProjectInterface } from 'types';
import Descriptions from '../../atoms/Descriptions';
import Images from '../../atoms/Images';
import SkillTags from '../../molecules/SkillTags';
import UnorderedList from '../../molecules/UnorderedList';
import './Project.scss';

export interface ProjectProps {
  project: ProjectInterface;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const { name, skills, descriptions, images, explanations, dids } = project;
  return (
    <div className='project'>
      <h3>{name}</h3>
      {skills && <SkillTags skills={skills} />}
      {descriptions && <Descriptions descriptions={descriptions} />}
      {images && <Images images={images} />}
      {explanations && explanations.map(explanation => <p key={explanation}>{explanation}</p>)}
      {dids && <UnorderedList list={dids} />}
    </div>
  );
};

export default Project;

import React from 'react';
import './SkillTags.scss';

export interface SkillTagsProps {
  skills: string[];
}

const SkillTags: React.FC<SkillTagsProps> = ({ skills }) => {
  return (
    <div className='skill-tags'>
      {skills.map(skill => (
        <p key={skill} className='skill-tags__tag'>
          {skill}
        </p>
      ))}
    </div>
  );
};

export default SkillTags;

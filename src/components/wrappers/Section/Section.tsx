import React from 'react';
import './Section.scss';

export interface SectionProps {
  pageBreak?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, pageBreak }) => {
  return (
    <section className={`section${pageBreak ? ' section--page-break' : ''}`}>
      <div className='section__wrapper'>{children}</div>
    </section>
  );
};

export default Section;

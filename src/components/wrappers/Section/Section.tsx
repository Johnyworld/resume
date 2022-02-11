import React from 'react';
import './Section.scss';

export interface SectionProps {

}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className='section'>
      <div className='section__wrapper'>
        {children}
      </div>
    </section>
  );
}

export default Section;

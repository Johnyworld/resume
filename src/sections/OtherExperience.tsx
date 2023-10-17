import { useEffect, useState } from 'react';
import MarkdownSection from './MarkdownSection';
import otherExerienceMarkdown from '../data/other.md';

export const OtherExperienceSection = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(otherExerienceMarkdown)
      .then(res => res.text())
      .then(res => setData(res));
  }, []);

  return <MarkdownSection title='Other Experience | Education.' markdown={data} />;
};

import { useEffect, useState } from 'react';
import MarkdownSection from '../components/organisms/MarkdownSection';
import toyProjectMarkdown from '../data/toy-project.md';

export const ToyProjectSection = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(toyProjectMarkdown)
      .then(res => res.text())
      .then(res => setData(res));
  }, []);

  return <MarkdownSection title='Toy Projects.' markdown={data} />;
};

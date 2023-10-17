import Markdown from '../../atoms/Markdown';
import Title from '../../atoms/Title';
import Section from '../../wrappers/Section';

interface Props {
  title: string;
  markdown: string;
  pageBreak?: boolean;
}

const MarkdownSection = ({ title, markdown, pageBreak }: Props) => {
  return (
    <Section pageBreak={pageBreak}>
      <Title>{title}</Title>
      <Markdown>{markdown}</Markdown>
    </Section>
  );
};

export default MarkdownSection;

import Markdown from "../../components/atoms/Markdown";
import Title from "../../components/atoms/Title";
import Section from "../../components/wrappers/Section";

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

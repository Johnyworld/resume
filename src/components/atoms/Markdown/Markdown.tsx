import MarkdownToJSX from "markdown-to-jsx";
import Image from "../Image";
import "./Markdown.scss";

interface Props {
  children: string;
}

const Markdown = ({ children }: Props) => {
  return (
    <MarkdownToJSX
      className="markdown"
      options={{
        overrides: { img: Image, a: { props: { target: "_blank" } } }
      }}>
      {children}
    </MarkdownToJSX>
  );
};

export default Markdown;

import React, { useContext } from "react";
import ModalContext from "../../../utils/modal/modal.context";
import "./Image.scss";

export interface ImageProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    "onClick" | "className"
  > {}

const Image: React.FC<ImageProps> = ({ ...props }) => {
  const { alt, src } = props;
  const { open } = useContext(ModalContext);
  const handleClick = () => src && open(src);
  return <img {...props} alt={alt} className="image" onClick={handleClick} />;
};

export default Image;

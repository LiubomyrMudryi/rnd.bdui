import styled from "styled-components";
import { IImageProps } from "../interfaces/types";

const StyledImage = styled("img")<IImageProps>``;

const Image = ({ ...props }: IImageProps) => {
  return <StyledImage {...props} />;
};

export default Image;

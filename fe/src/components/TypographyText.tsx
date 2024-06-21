import { Typography as AntdTypography } from "antd";
import styled from "styled-components";
import { ITypographyTextProps } from "../interfaces/types";

const StyledTypographyText = styled(AntdTypography.Text)<ITypographyTextProps>`
  &,
  & a {
    color: ${(props) => props.$color || "inherit"};
    margin: ${(props) => props.$margin};
    font-size: ${(props) => props.$fontSize};
    text-align: ${(props) => props.$textAlign};
    line-height: ${(props) => props.$lineHeight};
    font-weight: ${(props) => props.$fontWeight};
    padding: ${(props) => props.$padding};
    display: ${(props) => props.$display};
    justify-content: ${(props) => props.$justifyContent};
    cursor: ${(props) => props.$cursor};
  }
  & .ant-typography-expand,
  & .ant-typography-edit,
  & .ant-typography-copy {
    line-height: initial;
  }
  & a {
    text-decoration: underline;
  }

  & a:hover {
    opacity: 0.8;
    color: ${(props) => props.$color};
    text-decoration: none;
  }
`;

const TypographyText = ({ children, ...props }: ITypographyTextProps) => {
  return <StyledTypographyText {...props}>{children}</StyledTypographyText>;
};

export default TypographyText;

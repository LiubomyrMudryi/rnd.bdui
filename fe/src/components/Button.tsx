import { Button as AntdButton } from "antd";
import styled from "styled-components";

import { IButtonProps } from "../interfaces/types";
import { memo } from "react";

const StyledButton = styled(AntdButton)<IButtonProps>`
  &.ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.$height || "100%"};
    color: ${(props) => props.$color || "white"};
    width: ${(props) => props.$width || "100%"};
    min-width: ${(props) => props.$minWidth};
    padding: ${(props) => props.$padding || "8px 0"};
    margin: ${(props) => props.$margin};
    font-size: ${(props) => props.$fontSize || "16px"};
    line-height: ${(props) => props.$lineHeight || "20px"};
    font-weight: ${(props) => props.$fontWeight || 400};
    background: ${(props) => props.$background || "black"};
    border: ${(props) => props.$border || "1px solid"};
    border-color: ${(props) => props.$borderColor || "transparent"};
    cursor: pointer;
  }
  &:focus {
    border-color: transparent;
  }
  &.ant-btn[disabled] {
    background: #efefef;
    color: #606060;
    cursor: not-allowed;
  }
`;

const Button = ({ children, ...props }: IButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default memo(Button);

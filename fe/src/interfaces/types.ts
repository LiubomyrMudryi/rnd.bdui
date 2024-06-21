import { TextProps } from "antd/lib/typography/Text";
import { ReactNode } from "react";
import { ICssProperty } from "./css-property";

export interface ITypographyTextProps extends TextProps, ICssProperty {
  children: ReactNode;
  title?: string;
}

export interface IButtonProps extends ICssProperty {
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  title?: string;
}

export interface IImageProps extends ICssProperty {
  src: string;
  alt?: string;
}

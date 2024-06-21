import { ReactNode } from "react";

export interface IInstractions {
  name: string;
  props: { [name: string]: string };
  children?: ReactNode;
}

import { ICssProperty } from './css-property.interface';

export interface IComponent {
  name: string;
  props: ICssProperty;
  children?: IComponent | string;
}

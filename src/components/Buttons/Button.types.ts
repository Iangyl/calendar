import { CSSProperties } from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface IButtonOptions {
  preElement?: JSX.Element | JSX.Element[];
  sufElement?: JSX.Element | JSX.Element[];
}

interface IButton {
  style?: CSSProperties;
  type: ButtonType;
  className?: string;
  content?: string | JSX.Element | JSX.Element[];
  options?: IButtonOptions;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default IButton;

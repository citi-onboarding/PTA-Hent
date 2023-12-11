import { MouseEventHandler } from "react";

export interface ButtonInterface {
  text: string;
  width: string;
  height: string;
  color: string;
  backgroundColor: string;
  fontWeight: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

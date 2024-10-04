import { FC, ReactNode } from "react";
import clsx from "clsx";
import "./Box.css";

interface BoxProps {
  children: ReactNode;
  className?: string;
}

const Box: FC<BoxProps> = ({ children, className }) => {
  return <div className={clsx("box-container", className)}>{children}</div>;
};

export default Box;

import { FC } from "react";
import clsx from "clsx";
import "./YearBox.css";

interface YearBoxProps {
  year: number;
  activeTab: boolean;
}

const YearBox: FC<YearBoxProps> = ({ year, activeTab }) => {
  return (
    <div className={clsx("yearbox-container", { active: activeTab })}>
      {year}
    </div>
  );
};

export default YearBox;

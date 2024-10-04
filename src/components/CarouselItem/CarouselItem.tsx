import { FC } from "react";
import { CarouselItemProps } from "../../models/utils";
import AmazonLogo from "../../svg/AmazonLogo";
import Box from "../Box/Box";
import YearBox from "../YearBox/YearBox";
import clsx from "clsx";
import "./CarouselItem.css";

interface CarouselItemWithActive extends CarouselItemProps {
  activeTab: boolean;
}

const CarouselItem: FC<CarouselItemWithActive> = ({ activeTab, ...props }) => {
  const { companies, description, year } = props;

  return (
    <div className={clsx("carouselItem-container", activeTab && "active")}>
      <div className="caroulselItem-container__companies">
        {companies.map((company) => (
          <Box
            key={company.id}
            className={clsx({
              active: activeTab,
            })}
          >
            <AmazonLogo />
          </Box>
        ))}
        <Box
          className={clsx({
            active: activeTab,
            description: true,
          })}
        >
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Box>
      </div>
      <div
        className={clsx("caroulselItem-container__separator", {
          active: activeTab,
        })}
      />
      <YearBox year={year} activeTab={activeTab} />
    </div>
  );
};

export default CarouselItem;

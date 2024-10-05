import { FC } from "react";
import { CarouselItemProps } from "../../models/carouselModels";
import AmazonLogo from "../../svg/AmazonLogo";
import Box from "../Box/Box";
import YearBox from "../YearBox/YearBox";
import clsx from "clsx";
import EmptyCarouselItem from "../EmptyCarouselItem/EmptyCarouselItem";
import { renderEmptyBoxes } from "./renderEmptyBoxes";
import "./CarouselItem.css";

interface CarouselItemPropsWithActive extends CarouselItemProps {
  activeTab: boolean;
  maxCompanyBoxesToDisplay: number;
}

const CarouselItem: FC<{ props: CarouselItemPropsWithActive | null }> = ({
  props,
}) => {
  if (!props) return <EmptyCarouselItem />;

  const { companies, description, year, activeTab, maxCompanyBoxesToDisplay } =
    props;

  const emptyBoxes = maxCompanyBoxesToDisplay - companies.length;

  return (
    <div className={clsx("carousel-item-container", activeTab && "active")}>
      <div className="carousel-item__companies">
        {renderEmptyBoxes(emptyBoxes)}
        {companies.map((company) => (
          <Box key={company.id} className={clsx({ active: activeTab })}>
            <AmazonLogo />
          </Box>
        ))}
        <Box className={clsx({ active: activeTab, description: true })}>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Box>
      </div>
      <div
        className={clsx("carousel-item__separator", {
          active: activeTab,
        })}
      />
      <YearBox year={year} activeTab={activeTab} />
    </div>
  );
};

export default CarouselItem;

import { FC, useState } from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { CarouselItemProps } from "../../models/carouselModels";
import Arrow from "../../svg/Arrow";
import "./Carousel.css";
import { useResponsiveCarousel } from "../../hooks/useResponsiveCarousel";

interface CarouselProps {
  data: CarouselItemProps[];
}

const Carousel: FC<CarouselProps> = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);
  const { itemsPerPage, paddedData, centralIndex, maxCompanyBoxesToDisplay } =
    useResponsiveCarousel(data);

  const handleNext = () => {
    if (startIndex + itemsPerPage < paddedData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleData = paddedData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="carousel-container">
        <div className="carousel__slider">
          {visibleData.map((item, index) => (
            <CarouselItem
              key={`year-${item?.year || "null" + index}`}
              props={
                item
                  ? {
                      ...item,
                      activeTab: index === centralIndex,
                      maxCompanyBoxesToDisplay: maxCompanyBoxesToDisplay,
                    }
                  : null
              }
            />
          ))}
        </div>
        <div className="carousel__controllers">
          <div className="controllers__left" onClick={handlePrev}>
            <Arrow />
          </div>
          <div className="controllers__right" onClick={handleNext}>
            <Arrow />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

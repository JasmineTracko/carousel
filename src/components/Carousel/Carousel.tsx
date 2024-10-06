import { FC, useState } from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { CarouselItemProps } from "../../models/carouselModels";
import "./Carousel.css";
import { useResponsiveCarousel } from "../../hooks/useResponsiveCarousel";
import CarouselControllers from "../CarouselControllers/CarouselControllers";

interface CarouselProps {
  data: CarouselItemProps[];
}

const Carousel: FC<CarouselProps> = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);
  const { itemsPerPage, paddedData, centralIndex, maxCompanyBoxesToDisplay } =
    useResponsiveCarousel(data);

  const carouselStartIndex = startIndex <= 0;
  const carouselEndIndex = startIndex + itemsPerPage >= paddedData.length;

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
        <CarouselControllers
          onPrev={handlePrev}
          onNext={handleNext}
          isPrevDisabled={carouselStartIndex}
          isNextDisabled={carouselEndIndex}
        />
      </div>
    </>
  );
};

export default Carousel;

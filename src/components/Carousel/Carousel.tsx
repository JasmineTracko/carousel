import { FC, useState } from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { CarouselItemProps } from "../../models/utils";
import Arrow from "../../svg/Arrow";
import "./Carousel.css";

interface CarouselProps {
  data: CarouselItemProps[];
}

const Carousel: FC<CarouselProps> = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 5;

  const centralIndex = Math.floor(itemsPerPage / 2);

  const handleNext = () => {
    if (startIndex + itemsPerPage < data.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="carousel-container">
      <div className="carousel__slider">
        {visibleItems.map((item, index) => (
          <CarouselItem {...item} activeTab={index === centralIndex} />
        ))}
      </div>
      <div className="carousel-controllers">
        <div className="controllers__left" onClick={handlePrev}>
          <Arrow />
        </div>
        <div className="controllers__right" onClick={handleNext}>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

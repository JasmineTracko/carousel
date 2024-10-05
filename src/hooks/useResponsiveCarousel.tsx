import { useState, useEffect } from "react";
import { CarouselItemProps } from "../models/carouselModels";
import { getMaxCompaniesLength, fillData } from "../utils/CarouselUtils";

export const useResponsiveCarousel = (data: CarouselItemProps[]) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [paddedData, setPaddedData] = useState<(CarouselItemProps | null)[]>(
    []
  );
  const maxCompanyBoxesToDisplay = getMaxCompaniesLength(data);
  const centralIndex = Math.floor(itemsPerPage / 2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const items = width < 425 ? 1 : width < 1024 ? 3 : 5;
      const filledData = fillData(data, items);

      setItemsPerPage(items);
      setPaddedData(filledData);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data]);

  return {
    itemsPerPage,
    paddedData,
    maxCompanyBoxesToDisplay,
    centralIndex,
  };
};

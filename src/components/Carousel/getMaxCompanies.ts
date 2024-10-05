import { CarouselItemProps } from "../../models/carouselModels";

export const getMaxCompanies = (data: CarouselItemProps[]) => {
  let maxCompanies = 0;

  data.forEach((item) => {
    if (item.companies && item.companies.length > maxCompanies) {
      maxCompanies = item.companies.length;
    }
  });

  return maxCompanies;
};

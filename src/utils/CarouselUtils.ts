import { CarouselItemProps } from "../models/carouselModels";

export const getMaxCompaniesLength = (data: CarouselItemProps[]) => {
  let maxCompanies = 0;

  data.forEach((item) => {
    if (item.companies && item.companies.length > maxCompanies) {
      maxCompanies = item.companies.length;
    }
  });

  return maxCompanies;
};

export const fillData = (
  data: CarouselItemProps[],
  itemsPerPage: number
): (CarouselItemProps | null)[] => {
  const modifiedData: (CarouselItemProps | null)[] = [...data];

  if (itemsPerPage === 5) {
    modifiedData.unshift(null, null);
    modifiedData.push(null, null);
  } else if (itemsPerPage === 3) {
    modifiedData.unshift(null);
    modifiedData.push(null);
  }

  return modifiedData;
};

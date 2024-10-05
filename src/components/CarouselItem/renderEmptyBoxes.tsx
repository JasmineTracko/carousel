import clsx from "clsx";
import Box from "../Box/Box";

export const renderEmptyBoxes = (count: number) => {
  return Array.from({ length: count }).map((_, index) => (
    <Box key={`empty-box-${index}`} className={clsx("empty-box")}>
      <></>
    </Box>
  ));
};

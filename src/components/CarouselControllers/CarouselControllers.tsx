import { FC } from "react";
import clsx from "clsx";
import Arrow from "../../svg/Arrow";
import "./CarouselControllers.css";

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const LeftButton: FC<ButtonProps> = ({ onClick, disabled }) => {
  return (
    <div
      className={clsx("controllers__left", { disabled })}
      onClick={!disabled ? onClick : undefined}
    >
      <Arrow />
    </div>
  );
};

export const RightButton: FC<ButtonProps> = ({ onClick, disabled }) => {
  return (
    <div
      className={clsx("controllers__right", { disabled })}
      onClick={!disabled ? onClick : undefined}
    >
      <Arrow />
    </div>
  );
};

interface CarouselControllersProps {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

const CarouselControllers: FC<CarouselControllersProps> = ({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}) => {
  return (
    <div className="carousel__controllers">
      <LeftButton onClick={onPrev} disabled={isPrevDisabled} />
      <RightButton onClick={onNext} disabled={isNextDisabled} />
    </div>
  );
};

export default CarouselControllers;

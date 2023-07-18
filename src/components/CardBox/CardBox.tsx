import React, { useState } from "react";

interface Props {
  isValid: boolean;
  isVisible: boolean;
  onClick: (isRight: boolean) => void;
  number: number;
}
export const CardBox = ({ isVisible, onClick, number, isValid }: Props) => {
  const [error, setError] = useState<boolean>(false);
  const handleClick = () => {
    if (!isVisible) {
      setTimeout(() => setError(true), 2000);
      onClick(isValid);
    }
  };
  return <div onClick={handleClick}>{number}</div>;
};

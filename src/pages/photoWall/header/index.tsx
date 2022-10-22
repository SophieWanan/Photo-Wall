import React, { useState, useEffect } from "react";
import { HeaderWrapper, SortByRatedButton, SortByViewedButton } from "./styled";

interface IProps {
  rearrange: (rearrange: boolean) => void;
}

export const Header: React.FC<IProps> = ({ rearrange }) => {
  const [order, setOrder] = useState<boolean>(false);
  useEffect(() => {
    rearrange(order);
  }, [order]);
  return (
    <HeaderWrapper>
      <SortByRatedButton onClick={() => setOrder(!order)}>
        most rated
      </SortByRatedButton>
      <SortByViewedButton onClick={() => setOrder(!order)}>
        most viewed
      </SortByViewedButton>
    </HeaderWrapper>
  );
};

import React from "react";
import { HeaderWrapper, SortByRatedButton, SortByViewedButton } from "./styled";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <SortByRatedButton>most rated</SortByRatedButton>
      <SortByViewedButton>most viewed</SortByViewedButton>
    </HeaderWrapper>
  );
};

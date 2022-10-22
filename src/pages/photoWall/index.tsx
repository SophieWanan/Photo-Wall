import React, { useEffect, useState } from "react";
import { random, sortBy } from "lodash";
import { Grid } from "./grid";
import { UNSPLASH_DATA } from "../../constants/photos";
import { Header } from "./header";
import { Wrapper } from "./styled";

export interface Pictures {
  url: string;
  sortBy: number;
}

let pictures = UNSPLASH_DATA.map((item) => {
  return {
    url: item.urls.full,
    sortBy: random(0, 10, true),
  };
});

export const PhotoWall: React.FC = () => {
  const [order, setOrder] = useState<boolean>(false);

  useEffect(() => {
    pictures = pictures.map((picture) => {
      return {
        url: picture.url,
        sortBy: random(0, 10, true),
      };
    });
  }, [order]);

  const rearrange = (rearrange: boolean) => {
    setOrder(rearrange);
  };

  return (
    <>
      <Header rearrange={rearrange} />
      <Wrapper>
        <Grid
          pictures={sortBy(pictures, (p) => p.sortBy)}
          onPictureClick={() => {}}
        ></Grid>
      </Wrapper>
    </>
  );
};

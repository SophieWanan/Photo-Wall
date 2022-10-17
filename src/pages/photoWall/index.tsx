import React, { useEffect } from "react";
import axios from "axios";
import { Grid } from "./grid";
import { Header } from "./header";
const photos = ["photo_1", "photo_2", "photo_3"];
const pictures = photos.map((photo) =>
  require("../../../public/static/" + photo + ".jpg")
);

export const PhotoWall: React.FC = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get("https://unsplash.com/napi/photos")
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log('e', e);
      })
      .finally();
  };
  return (
    <>
      <Header />
      <Grid pictures={pictures} onPictureClick={() => {}}></Grid>
    </>
  );
};

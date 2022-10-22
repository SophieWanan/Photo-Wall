import React from "react";
import { Thumbnail } from "../thumbnail";
import { ThumbnailWrapper } from "./styled";
import { Pictures } from "../index";

interface IProps {
  pictures: Pictures[];
  onPictureClick?: (picture: string) => void;
}

export const Grid: React.FC<IProps> = ({ pictures, onPictureClick }) => {
  return (
    <ThumbnailWrapper>
      {pictures.map(
        (picture) =>
          onPictureClick && (
            <Thumbnail
              URL={picture.url}
              key={picture.url}
              onClick={onPictureClick}
            ></Thumbnail>
          )
      )}
    </ThumbnailWrapper>
  );
};

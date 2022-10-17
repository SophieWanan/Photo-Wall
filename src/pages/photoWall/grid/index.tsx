import React from "react";
import { Thumbnail } from "../thumbnail";

interface IProps {
  pictures: string[];
  onPictureClick: (picture: string) => void;
}

export const Grid: React.FC<IProps> = ({ pictures, onPictureClick }) => {
  return (
    <>
      {pictures.map((picture) => (
        <Thumbnail
          URL={picture}
          key={picture}
          onClick={onPictureClick}
        ></Thumbnail>
      ))}
    </>
  );
};

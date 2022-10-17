import React from "react";
import { Img, AvatarContainer } from "./styled";
import { PUBLIC_AVATAR } from "../contants/app";
interface IProps {
  image?: string;
}

export const Avatar: React.FC<IProps> = (image) => {
  const img = PUBLIC_AVATAR;
  return (
    <>
      <AvatarContainer>
        <Img src={img} />
      </AvatarContainer>
    </>
  );
};

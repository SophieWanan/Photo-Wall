import React, { useState } from "react";
import { Avatar } from "../../components/avatar";
import { PhotoWall } from "../photoWall";
import { Blog } from "../blog";
import {
  NavigationWrapper,
  NavigationBar,
  ButtonWrapper,
  PhotoWallButton,
  BlogButton,
} from "./styled";

export const Navigation: React.FC = () => {
  const [isPhotoWall, setIsPhotoWall] = useState<boolean>(true);
  return (
    <NavigationWrapper>
      <NavigationBar>
        <ButtonWrapper>
          My App
          <PhotoWallButton onClick={() => setIsPhotoWall(true)}>
            Photo Wall
          </PhotoWallButton>
          <BlogButton onClick={() => setIsPhotoWall(false)}>Blog</BlogButton>
        </ButtonWrapper>

        <Avatar />
      </NavigationBar>
      {isPhotoWall && <PhotoWall />}
      {!isPhotoWall && <Blog></Blog>}
    </NavigationWrapper>
  );
};

import React, { useRef } from "react";
import { Photo, PhotoContainer } from "./styled";
import { MotionProps } from "framer-motion";

interface Props extends MotionProps {
  URL: string;
  onClick: (picture: string) => void;
}
export const Thumbnail: React.FC<Props> = ({ URL, onClick }) => {
  const constraintsRef = useRef(null);
  return (
    <PhotoContainer ref={constraintsRef} onClick={() => onClick}>
      <Photo
        drag
        dragConstraints={constraintsRef}
        initial={{ width: 200, height: 200, borderRadius: 50 } as any}
        // animate={{ width: 300, opacity: 0.5, borderRadius: 20 }}
        src={URL}
        key={URL}
      ></Photo>
    </PhotoContainer>
  );
};

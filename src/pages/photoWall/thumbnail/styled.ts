import styled from "styled-components";
import { motion } from "framer-motion";

export const Photo = styled(motion.img)`
  width: 40px;
  height: 40px;
、border-radius: 10px;
`;

export const PhotoContainer = styled(motion.div)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
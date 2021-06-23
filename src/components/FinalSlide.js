import { animated } from "react-spring";
import styled from "styled-components";
import color from "../utils/color";

const InvertedBlock = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;

  background-color: ${color.accent};
  &,
  & * {
    color: ${color.base};
  }

  text-align: center;
  font-size: 32px;

  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`;

const AnimatedBlock = animated(InvertedBlock);

function FinalSlide({ style }) {
  return (
    <AnimatedBlock style={style}>
      Перерыв
      <br />
      закончен
    </AnimatedBlock>
  );
}

export default FinalSlide;

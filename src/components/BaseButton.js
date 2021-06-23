import styled from "styled-components";
import color from "../utils/color";

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 0.5rem;
  border: 0;

  color: ${(props) => (props.isInverted ? color.base : color.accent)};
  background: transparent;

  font-family: inherit;
  font-size: 1.5rem;
  text-align: left;

  border-radius: 2px;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    margin-right: 1rem;

    background-color: ${(props) =>
      props.isInverted ? color.base : color.accent};

    border-radius: 50%;
    opacity: 0;
    transition: opacity 300ms;
  }

  &:focus {
    outline: none;
  }

  &:focus,
  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;

export default BaseButton;

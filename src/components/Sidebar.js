import styled from "styled-components";
import color from "../utils/color";

const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  width: 100%;
  max-width: 200px;
  padding: 2rem;
  overflow-y: auto;

  background-color: ${(props) =>
    props.isInverted ? color.accent : color.base};
  box-shadow: ${(props) => (props.isInverted ? color.base : "black")} 0px 20px
    30px -10px;
`;

export default Sidebar;

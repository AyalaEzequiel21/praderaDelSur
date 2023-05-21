import { styled } from "styled-components";
import { colors } from "../../../data";

export const SeparatorStyle = styled.hr`
    border: 0;
    height: 3px;
    width: 10rem;
    margin: 5rem auto;
    background-image: -webkit-gradient(linear, left top, right top, from(${colors.green}), color-stop($verde), to(${colors.green}));
    background-image: linear-gradient(to right, ${colors.green}, $verde, ${colors.green});
    -webkit-box-shadow: 1px 3px 6px 0.5px rgb(131 131 131 / 60%);
    box-shadow: 1px 3px 6px 0.5px rgb(131 131 131 / 60%);
`
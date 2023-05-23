import styled from "styled-components";
import { colors } from "../../../data";

export const ButtonStyle = styled.button`
    background-color: ${colors.green};
    border: 1px solid ${colors.white};
    border-radius: 10px;
    color: ${colors.white};
    height: 2rem;
    width: 6rem;

    &:hover{
        color: ${colors.gold};
    }
`
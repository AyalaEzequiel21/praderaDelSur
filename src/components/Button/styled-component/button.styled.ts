import styled from "styled-components";
import { colors, fontSizes } from "../../../data";

export const ButtonStyle = styled.button`
    align-items: center;
    background-color: ${colors.green};
    border-radius: 10px;
    display: flex;
    color: ${colors.white};
    cursor: pointer;
    font-size: ${fontSizes.itemNav};
    height: 2.5rem;
    justify-content: center;
    width: 7rem;

    &:hover{
        background-color: transparent;
        border: 3px solid ${colors.green};
        color: ${colors.green};
        font-weight: bold;
        transition: 0.2s;
    }
`
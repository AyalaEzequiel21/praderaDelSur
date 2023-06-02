import styled from "styled-components";
import { colors, fontSizes } from "../../../data";

export const ButtonStyle = styled.button`
    align-items: center;
    background-color: ${colors.green};
    border-radius: 10px;
    display: flex;
    color: ${colors.white};
    cursor: pointer;
    font-size: ${fontSizes.btn};
    height: 2.7rem;
    justify-content: center;
    padding: 5px 20px;

    &:hover{
        background-color: transparent;
        border: 2px solid ${colors.green};
        color: ${colors.green};
        font-weight: bold;
        transition: 0.2s;
    }
`
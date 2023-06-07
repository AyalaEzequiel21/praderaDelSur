import { styled } from "styled-components";
import { textStyle, titleStyles } from "../../../../../data";

export const MessageContactStyle = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    grid-area: message;
    justify-content: center;

    & p{
        ${textStyle};
    };

    & h1{
        ${titleStyles};
    }
`
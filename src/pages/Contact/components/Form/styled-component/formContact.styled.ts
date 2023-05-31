import { styled } from "styled-components";
import { fontSizes } from "../../../../../data";

export const InputContainerStyle = styled.div`
    display: flex; 
    flex-direction: column;

    & label{
        font-size:${fontSizes.itemNav};
    };

    & input{
        height: 3rem;
    }
`

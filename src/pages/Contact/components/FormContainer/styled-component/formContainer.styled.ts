import { styled } from "styled-components";
import { colors, fontSizes } from "../../../../../data";

export const FormContainerStyle = styled.div`
    align-items: center;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    grid-area: form;
    height: 630px;
    justify-content: center;
    margin: 10px 0;
    width: 90%;
    max-width: 500px;

    & h1{
        color: ${colors.green};
        font-size: ${fontSizes.itemNav};
        font-weight: 500;
        margin-bottom: 2rem;
        text-decoration: underline;
    }

    & form{
        align-items: center;
        display: flex; 
        flex-direction: column;
        height: 560px;
        justify-content: space-around;
        width: 90%;

        & button{
            margin-top: 5px;
        }
    }
`
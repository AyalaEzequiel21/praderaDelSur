import { styled } from "styled-components";
import { breakpoints } from "../../../data";

export const ContactStyle = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 50px 10px;

    @media(min-width: ${breakpoints.mediumPX}){
        align-items: center;
        align-content: center;
        display: grid;
        grid-template-areas:
        "message message"
        "form infoContact";
        grid-template-columns: 1fr 1fr; 
        justify-items: center;
        justify-content: center;
        width: 100%;
        max-width: 1200px;
        padding: 70px 10px;

        & h1{
            margin-bottom: 20px;
        }
    }
`
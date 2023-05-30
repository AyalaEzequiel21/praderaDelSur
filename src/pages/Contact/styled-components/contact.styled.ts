import { styled } from "styled-components";
import { breakpoints } from "../../../data";

export const ContactStyle = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 10px;

    @media(min-width: ${breakpoints.mediumPX}){
        display: grid;
        grid-template-areas:
        "message message"
        "form infoContact";
    }
`
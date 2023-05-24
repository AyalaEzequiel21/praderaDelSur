import { styled } from "styled-components";
import { breakpoints } from "../../../data";

export const HomeStyle = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;

    @media(min-width: ${breakpoints.largePX}){
        width: 85%;
    }
    
`
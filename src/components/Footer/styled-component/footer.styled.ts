import { styled } from "styled-components";
import { breakpoints, colors, fontSizes } from "../../../data";

export const FooterStyle = styled.footer`
    align-content: center;
    background-color: ${colors.green};
    display: grid;
    grid-template-areas: 
        "logo"
        "container"
        "copy"
    ;
    justify-items: center;
    
    @media(min-width: ${breakpoints.mediumPX}){
        grid-template-areas: 
        "container logo"
        "copy copy";
        justify-content: space-between;
    }; 
`

export const LogoFooterStyle = styled.img`
    grid-area: logo;
    height: 7rem;
    width: 10rem;

    @media(min-width:${breakpoints.mediumPX}){
        height: 8rem;
        width: 11rem;
        margin: 20px;
    }
`

export const ContainerDataStyle = styled.div`
    color: ${colors.white};
    grid-area: container;
    
    text-align: center;

    & p {
        font-size: ${fontSizes.itemFooter};
        padding: 5px 0;

        & a{
            color: ${colors.white};
        }
    }

    @media(min-width:${breakpoints.mediumPX}){
        text-align: start;
        padding: 20px;
    }
`

export const CopyrightStyle = styled.h6`
    color: ${colors.white};
    grid-area: copy;
    margin-top: 20px;

    @media(min-width:${breakpoints.mediumPX}){
        margin-top: 0px;
    }
`
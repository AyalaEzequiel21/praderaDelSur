import styled from "styled-components"
import { breakpoints, colors } from "../../../data"

export const SplashContainerStyle = styled.div`
    height: 16rem;
	width: 100%;
    position: absolute;

    @media(min-width: ${breakpoints.mediumPX}){
        height: 22rem;
    };

    @media(min-width: ${breakpoints.largePX}){
        height: 27rem
    }
`

export const ImageSplashStyle = styled.img`
    height: 100%;
    width: 100%;

    @media(min-width: ${breakpoints.mediumPX}){
        object-fit:cover
    }
`

export const TextContainerStyle = styled.div`
    color: ${colors.white}; 
    margin: auto 0;
    position: relative;
    bottom: 8rem;
    text-align:center;

    @media(min-width: ${breakpoints.mediumPX}){
        bottom: 9rem;
    }
`

export const TitleStyle = styled.h1`
    font-size: 1.9rem;
    margin: 0 auto;
    max-width: 90%;
    line-height: 1.2;

    @media(min-width: ${breakpoints.mediumPX}){
        font-size: 2.5rem;
    }
`

export const SubtitleStyle = styled.h3`
    font-size: 1.3rem;
    font-weight: 300;

    @media (min-width: ${breakpoints.mediumPX}){
        font-size: 1.5rem;
        font-weight: 400;
    }
`
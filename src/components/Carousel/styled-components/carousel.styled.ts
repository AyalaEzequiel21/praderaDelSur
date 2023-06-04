import { styled } from "styled-components";
import { breakpoints, colors, fontSizes, stylesShadow } from "../../../data";

export const CarouselContainerStyle = styled.div`
    align-items: center;
    display: flex;
    grid-area: carousel;
    height: 100%;
    justify-content: space-around;
    margin: 10px 0;
    width: 100%;
    max-width: 410px;
`

export const ImageContainerStyle = styled.div`
    align-items: center;
    ${stylesShadow};
    display: flex;
    height: 300px;
    justify-content: center;
    width: 280px;

    @media(min-width: ${breakpoints.mediumPX}){
        height: 340px;
        width: 320px;
    };

    @media(min-width: ${breakpoints.largePX}){
        height: 350px;
        width: 330px;
    };


    & img{
        border-radius: 30px;
        height: 100%;
        width: 100%;
    }
`

export const BtnCarouselStyle = styled.button`
    align-items: center;
    color: ${colors.green};
    cursor: pointer;
    display: flex;
    filter: drop-shadow(4px 4px 2px rgba(124, 119, 121, 0.5));
    font-size: ${fontSizes.subTitle};
    font-weight: 700;
    justify-content: center;
`
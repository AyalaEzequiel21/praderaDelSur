import { styled } from "styled-components";
import { colors, shadows } from "../../../data";

export const CarouselContainerStyle = styled.div`
    align-items: center;
    display: flex;
    grid-area: carousel;
    justify-content: center;
    margin: 10px 0;
`

export const ImageContainerStyle = styled.div`
    align-items: center;
    border-radius: 5px;
    box-shadow: ${shadows.shadowStyle};
    display: flex;
    height: 150px;
    justify-content: center;
    width: 150px;

    & img{
        border-radius: 5px;
        height: 99%;
        width: 99%;
    }
`

export const BtnCarouselStyle = styled.button`
    align-items: center;
    color: ${colors.green};
    cursor: pointer;
    display: flex;
    font-weight: 700;
    justify-content: center;
`
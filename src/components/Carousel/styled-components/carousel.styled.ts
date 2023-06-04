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
    border-radius: 5px;
    box-shadow: ${shadows.shadowStyle};
    height: 125px;
    width: 125px;
`

export const BtnCarouselStyle = styled.button`
    align-items: center;
    color: ${colors.green};
    display: flex;
    font-weight: 700;
    justify-content: center;
`
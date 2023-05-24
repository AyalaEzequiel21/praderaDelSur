import { styled } from "styled-components";
import { breakpoints, colors, fontSizes, shadows } from "../../../../../data";

interface CardCategorieStyleProp {
    imageUrl: string,
}

export const CardCategorieStyle = styled.article<CardCategorieStyleProp>`
    align-items: center;
    background-image: url(${props => props.imageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 25px;
    box-shadow: ${shadows.shadowCardStyle};
    display: flex;
    height: 14.5rem;
    justify-content: center;
    margin: 30px 0;
    object-fit: cover;
    width: 23rem;

    @media(min-width: ${breakpoints.largePX}){
        width: 25rem;
    };
    
    @media(min-width: ${breakpoints.largePX}){
        margin: 30px 50px;
    }
`

export const ActionContainerCardStyle = styled.div`
    align-items: center;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:hover{
        background: rgba(255,255,255,.01);
        backdrop-filter: blur(10px);
        height: 10rem;
        transition: 0.2s;
        width: 20rem;

    };

    & h3{
        color: ${colors.white};
        font-size: ${fontSizes.subTitle};
        margin-bottom: 10px;
    }
`
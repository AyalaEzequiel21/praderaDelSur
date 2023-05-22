import { styled } from "styled-components";

interface CardCategorieStyleProp {
    imageUrl: string,
}

export const CardCategorieStyle = styled.article<CardCategorieStyleProp>`
    align-items: center;
    background-image: url(${props => props.imageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 10rem;
    justify-content: center;
    object-fit: cover;
    width: 15rem;
    
`
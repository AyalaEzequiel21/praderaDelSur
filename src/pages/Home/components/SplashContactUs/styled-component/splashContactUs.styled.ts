import { styled } from "styled-components";
import { breakpoints, colors, fontSizes } from "../../../../../data";

interface SplashContainerProps {
    imageUrl: string;
}

export const SplashContainerStyle = styled.div<SplashContainerProps>`
    align-items: center;
    background-image: url(${props => props.imageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
    display: flex;
    height: 16rem;
    margin: 3rem 0;
    justify-content: center;
    object-fit: cover;
    width: 95vw;
    max-width: 1400px;

    @media(min-width: ${breakpoints.mediumPX}){
        height: 18rem;
    };

    @media(min-width: ${breakpoints.largePX}){
        height: 20rem;
    };
`

export const ActionContainerSplashStyle = styled.div`
    align-items: center;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 20px 0;
    width: 90%;

    &:hover{
        background: rgba(255,255,255,.01);
        backdrop-filter: blur(10px);
        transition: 0.2s;
    };

    @media(min-width: ${breakpoints.mediumPX}){
        height: 16rem;
        width: 70%;
    };

    @media(min-width: ${breakpoints.largePX}){
        height: 18rem;
        width: 50%;
    }

    & h3{
        color: ${colors.white};
        font-size: ${fontSizes.itemNav};
        line-height: 1.2;
        margin-bottom: 10px;
        text-align: center;

        @media(min-width: ${breakpoints.mediumPX}){
            font-size: ${fontSizes.subTitle};
            line-height: 1.5;
            margin-bottom: 20px;
        }
    };
`
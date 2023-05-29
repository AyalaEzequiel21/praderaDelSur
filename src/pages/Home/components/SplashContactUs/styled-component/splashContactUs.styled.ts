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
        height: 22rem;
    };
`

export const ActionContainerSplashStyle = styled.div`
    align-items: center;
    background: rgba(255,255,255,.01);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: center;
    width: 90%;

    @media(min-width: ${breakpoints.mediumPX}){
        height: 16rem;
        width: 70%;
    };

    @media(min-width: ${breakpoints.largePX}){
        background: none;
        backdrop-filter: none;
        height: 20rem;
        width: 50%;

        &:hover{
            background: rgba(255,255,255,.01);
            backdrop-filter: blur(10px);
            transition: 0.2s;
        };
    }

    & h3{
        color: ${colors.white};
        font-size: ${fontSizes.text};
        line-height: 1.3;
        margin-bottom: 10px;
        text-align: center;
        width: 90%;

        @media(min-width: ${breakpoints.mediumPX}){
            font-size: ${fontSizes.itemNav};
            line-height: 1.7;
            margin-bottom: 20px;
        };

        @media(min-width: ${breakpoints.largePX}){
            font-size: ${fontSizes.subTitle};
            font-weight: 500;
        }
    };
`
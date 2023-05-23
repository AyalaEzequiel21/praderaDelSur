import { styled } from "styled-components";

interface SplashContainerProps {
    imageUrl: string;
}

export const SplashContainerStyle = styled.div<SplashContainerProps>`
    background-image: url(${props => props.imageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 18rem;
    margin-bottom: 10rem;
    object-fit: cover;
    width: 95vw;
    max-width: 1400px;
`
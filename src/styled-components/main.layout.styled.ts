import { styled } from "styled-components";
import FondoImg from '../assets/fondo2.png'


export const MainLayoutStyle = styled.main`
    align-items: center;
    background-image: url(${FondoImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    min-height: 70vh;
    object-fit: cover;
    width: 100%;
`
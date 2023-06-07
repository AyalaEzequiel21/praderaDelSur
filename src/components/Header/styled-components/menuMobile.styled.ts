import { css, keyframes, styled } from "styled-components";
import { colors, fontSizes } from "../../../data";


export const MenuContainerStyle = styled.div`

`

export const HamburgerBtnStyle = styled.button`
    color: ${colors.white};
    font-size: ${fontSizes.splashText};
`

export const slideIn = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
`

const slideOut = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`

export const MenuStyle = styled.ul<{isOpen: boolean}>`
    background-color: ${colors.green};
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    display: none;
    margin-top: 4rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 200;
    ${({isOpen}) => isOpen &&
        css`
            display:block;
            animation: ${slideIn} 0.3s forwards;
            transition: animation 2s;
        `}
    ${({isOpen}) => !isOpen &&
    css`
        animation: ${slideOut} 0.3s forwards;
        transition: animation 2s;
    `}
`

export const ItemMenu = styled.li`
    padding: 20px 25px; 
    background: none;

    & a{
        align-items: center;
        color: ${colors.white};
        display: flex;
        font-size: ${fontSizes.itemNav}
    }
`
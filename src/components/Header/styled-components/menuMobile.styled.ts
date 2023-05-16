import { styled } from "styled-components";
import { colors, fontSizes } from "../../../data";


export const MenuContainerStyle = styled.div`

`

export const HamburgerBtnStyle = styled.button`
    color: ${colors.white};
    font-size: ${fontSizes.title};
`

export const MenuStyle = styled.ul`
    background-color: ${colors.green};
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    margin-top: 4rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 200;
`

export const ItemMenu = styled.li`
    padding: 10px 20px; 
    background: none;

    & a{
        align-items: center;
        color: ${colors.white};
        display: flex;
        font-size: ${fontSizes.itemNav}
    }
`
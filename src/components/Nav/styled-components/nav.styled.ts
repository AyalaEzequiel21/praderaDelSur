import styled from "styled-components"
import { colors, fontSizes } from "../../../data"

export const NavContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`

export const NavMenu = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-around;
`

export const ItemNav = styled.li`
    margin: 0 7px;

    & a{
        color: ${colors.white};
        font-size: ${fontSizes.itemNav};
        align-items: center;
        display: flex;
        justify-content: center;

        &:hover {
            color: ${colors.gold};
            text-decoration: underline;
            transition: 0.2s;
        }
    }
`
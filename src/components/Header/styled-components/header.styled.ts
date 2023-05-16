import styled from "styled-components";
import { breakpoints, colors } from "../../../data";

export const HeaderStyle = styled.div`
    align-items: center;
    background-color: ${colors.green};
    display: flex;
    height: 4.5rem;
    justify-content: space-between;
    padding: 0 .7rem;
    width: 100%;
`

export const LogoStyle = styled.img`
margin-top: 4rem;
height: 9rem;
width: 13rem;
position: relative;
right: 2rem;
z-index: 200;

@media(min-width:${breakpoints.medium}){
    height: 10rem;
    width: 14rem;
    right: 1.5rem;
};

@media(min-width:${breakpoints.large}){
    height: 11rem;
    margin-top: 5.5rem;
    right: 1rem;
    width: 15rem;
}
`
import React from 'react'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import { styled } from 'styled-components'
import { breakpoints, colors } from '../../data'

interface HeaderProps {

}

const HeaderStyle = styled.div`
    align-items: center;
    background-color: ${colors.green};
    display: flex;
    height: 4.5rem;
    justify-content: space-between;
    padding: 0 .7rem;
    width: 100%;
`

const LogoStyle = styled.img`
    margin-top: 6rem;
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
        width: 15rem;
        right: 1rem;
    }
`

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyle>
        <Link to={'/'}><LogoStyle src={Logo} alt='Logo pradera del sur'/></Link>
    </HeaderStyle>
  )
}

export default Header
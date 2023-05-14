import React from 'react'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import { styled } from 'styled-components'
import { breakpoints, colors } from '../../data'
import MenuIcon from '@mui/icons-material/Menu'
import { Nav } from '../Nav'

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

const HamburgerBtn = styled.button`
    align-items: center;
    display: flex;
    justify-content: center;
`

// this component have the logo with a link to the home, and 
// the nav when the app is dektop version or the hamburguer button when the app is mobile and tablet version

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyle>
        <Link to={'/'}><LogoStyle src={Logo} alt='Logo pradera del sur'/></Link>
        <HamburgerBtn >
            <MenuIcon fontSize='large'style={{color: `${colors.white}`}}/>
            {/* <Nav/> */}
        </HamburgerBtn>
    </HeaderStyle>
  )
}

export default Header
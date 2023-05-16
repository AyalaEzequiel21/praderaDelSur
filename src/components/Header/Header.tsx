import React from 'react'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import { Nav } from '../Nav'
import {  HeaderStyle, LogoStyle, MenuMobile } from '.'


interface HeaderProps {

}

// this component have the logo with a link to the home, and 
// the nav when the app is dektop version or the hamburguer button when the app is mobile and tablet version

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyle>
        <Link to={'/'}><LogoStyle src={Logo} alt='Logo pradera del sur'/></Link>
        <MenuMobile/>
        {/* <Nav/> */}
    </HeaderStyle>
  )
}

export default Header
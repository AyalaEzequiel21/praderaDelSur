import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HamburgerBtnStyle, ItemMenu, MenuContainerStyle, MenuStyle } from '.'
import {AiOutlineShoppingCart} from 'react-icons/ai'

interface MenuMobileProps {}

const MenuMoble: React.FC<MenuMobileProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu: ()=> void  = () => {
      setIsOpen(!isOpen)
    }
  return (
        <MenuContainerStyle>
            <HamburgerBtnStyle onClick={toggleMenu}>☰</HamburgerBtnStyle>
            {isOpen && (
                <MenuStyle onClick={toggleMenu} isOpen={isOpen}>
                    <ItemMenu><Link to={'/'}>INICIO</Link></ItemMenu>
                    <ItemMenu><Link to={'/'}>PRODUCTOS</Link></ItemMenu>
                    <ItemMenu><Link to={'/'}>TIENDA {<AiOutlineShoppingCart/>}</Link></ItemMenu>
                    <ItemMenu><Link to={'/contact'}>CONTACTO</Link></ItemMenu>
                </MenuStyle>
            )}
        </MenuContainerStyle>
  )
}

export default MenuMoble
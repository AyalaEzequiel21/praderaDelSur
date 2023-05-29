import { IconType } from 'react-icons'
import {HiOutlineMail, HiOutlineCalendar, HiOutlinePhone, HiOutlineLocationMarker} from 'react-icons/hi'

export interface ItemInfoContact{
    id: string,
    icon: IconType,
    text: string,
}

export const infoContact: ItemInfoContact[] = [
    {
        id: 'Horarios',
        icon: HiOutlineCalendar,
        text: 'Lunes a viernes 05 a 14 hs - Sábados 06 a 11 hs'
    },

    {
        id: 'Dirección',
        icon: HiOutlineCalendar,
        text: 'Av. Caminno Gral Belgrano N°1505 - Berazategui'
    },

    {
        id: 'Telefono',
        icon: HiOutlinePhone,
        text: '+54 11-4351-2001 - +54 11-3211-1783'
    },

    {
        id: 'Correo electronico',
        icon: HiOutlineMail,
        text: 'praderadelsur.contacto@gmail.com'
    }
]
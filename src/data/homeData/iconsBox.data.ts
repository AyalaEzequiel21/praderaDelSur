import {FaAward} from 'react-icons/fa'
import {FaTruck} from 'react-icons/fa'
import {FaHandshake} from 'react-icons/fa'
import { IconType } from 'react-icons'

export interface IconData {
    id: number,
    icon: IconType,
    text: string,

}

export const iconsBoxData: IconData[] = [
    {
        id:1,
        icon: FaAward,
        text: 'Calidad y selección meticulosa de materias primas en cada producto'
    },
    {
        id:2,
        icon: FaTruck,
        text: 'Contamos con vehículos propios para la logística de productos'
    },
    {
        id:3,
        icon: FaHandshake,
        text: 'Compromiso social, trabajo y crecimiento capacitado'
    }   
]
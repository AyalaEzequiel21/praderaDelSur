import {FaAward} from 'react-icons/fa'
import {FaTruck} from 'react-icons/fa'
import {FaHandshake} from 'react-icons/fa'
import { IconType } from 'react-icons'

interface IconData {
    icon: IconType,
    text: string,

}

export const iconsBoxData: IconData[] = [
    {
        icon: FaAward,
        text: 'Calidad impecable y selección cuidadosa de materias primas en cada producto'
    },
    {
        icon: FaTruck,
        text: 'Contamos con vehículos propios para la logística de productos'
    },
    {
        icon: FaHandshake,
        text: 'Compromiso social de trabajo fomentando el crecimiento y capacitación'
    }   
]
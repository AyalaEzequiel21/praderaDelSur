import choriBombon from '../../assets/products/chori-bombon.jpg'
import chorizo from '../../assets/products/chorizo.jpg'
import salchicha from '../../assets/products/salchicha.jpg'

import morcillaRosca from '../../assets/products/morcilla-rosca.jpg'
import morcillaAtada from '../../assets/products/morcilla-atada.jpg'
import ahumada from '../../assets/products/ahumada.jpg'
import lomoAhumado from '../../assets/products/lomo-ahumado.jpg'
import viena from '../../assets/products/salchicha-viena.jpg'

import colorado from '../../assets/products/colorado.jpg'
import longaniza from '../../assets/products/longaniza.jpg'
import salamin from '../../assets/products/salamin.jpg'

import salada from '../../assets/products/salada.jpg'

import bondiola from '../../assets/products/bondiola.jpg'
import churrasquito from '../../assets/products/churrasquito.jpg'
import carre from '../../assets/products/carre.jpg'
import pechito from '../../assets/products/pechito.jpg'


export const messageProducts = 'Descubre nuestra amplia selección de productos de alta calidad. Encuentra todo lo que necesitas en nuestras diferentes categorías'

export interface ProductData {
    id: number;
    title: string,
    images: string[],
    items: string[]
}
export const productsList: ProductData[] = [
    {
        id: 1,
        title: 'PRODUCTOS FRESCOS',
        images: [choriBombon, chorizo, salchicha],
        items: ['Chorizo bombon', 'Chorizo de cerdo', 'Chorizo criollo', 'Chorizo marsala','Salchicha atada', 'Salchicha sin atar']
    },

    {
        id: 2,
        title: 'PRODUCTOS COCIDOS',
        images: [morcillaAtada, morcillaRosca, ahumada, lomoAhumado, viena],
        items: ['Morcilla bombon', 'Morcilla atada', 'Morcilla rosca', 'Morcilla vasca','Lomo de cerdo ahumado', 'Jamon de cerdo cocido', 'Panceta de cerdo ahumada', 'Salchicha de viena']
    },

    {
        id: 3,
        title: 'PRODUCTOS SECOS',
        images: [colorado, longaniza, salamin],
        items: ['Chorizo colorado', 'Longaniza baston', 'Longaniza curva', 'Salamin baston', 'Salamin picado intermedio', 'Salamin tipo casero']
    },

    {
        id: 4,
        title: 'PRODUCTOS CURADOS',
        images: [salada],
        items: ['Bondiola seca', 'Jamon de cerdo crudo', 'Panceta de cerdo salada']
    },

    {
        id: 5,
        title: 'CORTES DE CERDO',
        images: [bondiola, carre, churrasquito, pechito],
        items: ['Bondiola', 'Bife de cerdo', 'Churrasquito de cerdo', 'Pechito de cerdo']
    }
]
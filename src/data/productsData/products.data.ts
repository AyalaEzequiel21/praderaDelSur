import choriBombon from '../../assets/products/chori-bombon.jpg'
import chorizo from '../../assets/products/chorizo.jpg'
import salchicha from '../../assets/products/salchicha.jpg'

import morcillaRosca from '../../assets/products/morcilla-rosca.jpg'
import morcillaAtada from '../../assets/products/morcilla-atada.jpg'
import ahumada from '../../assets/products/ahumada.jpg'
import lomoAhumado from '../../assets/products/lomo-ahumado.jpg'
import viena from '../../assets/products/salchicha-viena.jpg'



// import choriBombon from '../../assets/products/chori-bombon.jpg'


export const messageProducts = 'Descubre nuestra amplia selección de productos de alta calidad. Encuentra todo lo que necesitas en nuestras diferentes categorías'

export interface ProductData {
    title: string,
    images: string[],
    items: string[]
}
export const productsList: ProductData[] = [
    {
        title: 'PRODUCTOS FRESCOS',
        images: [choriBombon, chorizo, salchicha],
        items: ['Chorizo bombon', 'Chorizo de cerdo', 'Chorizo criollo', 'Chorizo marsala','Salchicha atada', 'Salchicha sin atar']
    },

    {
        title: 'PRODUCTOS COCIDOS',
        images: [morcillaAtada, morcillaRosca, ahumada, lomoAhumado, viena],
        items: ['Morcilla bombon', 'Morcilla atada', 'Morcilla rosca', 'Morcilla vasca','Lomo de cerdo ahumado', 'Jamon de cerdo cocido', 'Panceta de cerdo ahumada', 'Salchicha de viena']
    },

    {
        title: 'PRODUCTOS FRESCOS',
        images: [choriBombon, chorizo, salchicha],
        items: ['Chorizo bombon', 'Chorizo de cerdo', 'Chorizo criollo', 'Chorizo marsala','Salchicha atada', 'Salchicha sin atar']
    },

    {
        title: 'PRODUCTOS FRESCOS',
        images: [choriBombon, chorizo, salchicha],
        items: ['Chorizo bombon', 'Chorizo de cerdo', 'Chorizo criollo', 'Chorizo marsala','Salchicha atada', 'Salchicha sin atar']
    },

    {
        title: 'PRODUCTOS FRESCOS',
        images: [choriBombon, chorizo, salchicha],
        items: ['Chorizo bombon', 'Chorizo de cerdo', 'Chorizo criollo', 'Chorizo marsala','Salchicha atada', 'Salchicha sin atar']
    }
]
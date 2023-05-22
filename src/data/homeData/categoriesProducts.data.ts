import imgFresco from '../../assets/categoriesProductsImages/chorizo.jpg'
import imgCocido from '../../assets/categoriesProductsImages/morcilla.jpg'
import imgSeco from '../../assets/categoriesProductsImages/salamin.jpg'
import imgCurado from '../../assets/categoriesProductsImages/salada.jpg'
import imgCortes from '../../assets/categoriesProductsImages/pechito.jpg'

export const titleProducts = 'Nuestros productos...'
export const subTitleProducts = 'En cada uno de nuestros productos encontrarás el resultado de un trabajo minucioso y dedicado. Desde los ingredientes más frescos hasta la elaboración artesanal, cuidamos cada detalle para ofrecerte una experiencia culinaria excepcional.'

export interface Categorie {
    id: number,
    title: string,
    imageUrl: string,
}

export const categories: Categorie[] = [
    {
        id: 1,
        title: 'PRODUCTOS FRESCOS',
        imageUrl: `${imgFresco}`
    },
    {
        id: 2,
        title: 'PRODUCTOS COCIDOS',
        imageUrl: `${imgCocido}}`
    },
    {
        id: 3,
        title: 'PRODUCTOS SECOS',
        imageUrl: `${imgSeco}`
    },
    {
        id: 4,
        title: 'PRODUCTOS CURADOS',
        imageUrl: `${imgCurado}`
    },
    {
        id: 5,
        title: 'CORTES DE CERDO',
        imageUrl: `${imgCortes}`
    },
]
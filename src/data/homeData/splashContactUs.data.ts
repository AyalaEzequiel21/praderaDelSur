import imgSplash from '../../assets/contactUs.jpg'

export interface SplashData {
    imgUrl: string,
    text: string
}

export const splashContactUsData: SplashData = {
    imgUrl: `${imgSplash}`,
    text: 'Consulta y asesoramiento personalizado. ¡Estamos aquí para ayudarte! Completa el formulario y te contactaremos pronto'
}
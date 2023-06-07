//  COLORS //

export const colors = {
    green: '#243917',
    white: '#f5f5f5', 
    gold: '#817439'
}


// FONT SIZES //

export const fontSizes = {
    splashTextMobile: '2rem',
    splashText: '2.5rem',
    title: '1.6rem',
    itemNav: '1.2rem',
    btn: '1.4rem',
    text: '1.1rem',
    itemFooter: '1rem',
}


// BREAKPOINTS //

export const breakpoints = {
    smallPX: '480px',
    mediumPX: '768px',
    largePX: '1024px',
    smallW: 480,
    mediumW: 768,
    largeW: 1024
}

//SHADOW

export const shadows = {
    shadowStyle: ' 20px 20px 60px #d0d1d0, -20px -20px 60px #ffffff',
    shadowCardStyle: ' 20px 20px 15px #d0d1d0, -20px -20px 60px #ffffff'
}

// LIMITS

export const limits = {
    maxWidth: '1300px',
}



// ELEMENTS STYLES 

export const stylesShadow = `
    border-radius: 30px;
    box-shadow: 15px 15px 30px #bebebe,
            -15px -15px 30px #ffffff;
`

export const titleStyles = `
    color: ${colors.green};
    font-size: ${fontSizes.title};
    font-weight: 700;
    text-align: center;
    max-width: 700px;
`

export const textStyle = `
    color: ${colors.green};
    font-size: ${fontSizes.text};
    text-align: center; 

    @media(min-width: ${breakpoints.mediumPX}){
        padding: 0 50px;
        max-width: 615px;
    }
`
import React from 'react'
import styled from 'styled-components'
import splashImg from '../../assets/splash3.jpg'
import { breakpoints, colors } from '../../data'

interface SplashHeaderProps {
}

const SplashContainer = styled.div`
    height: 16rem;
	width: 100%;
    position: absolute;

    @media(min-width: ${breakpoints.medium}){
        height: 22rem;
    };

    @media(min-width: ${breakpoints.large}){
        height: 27rem
    }
`

const ImageSplash = styled.img`
    height: 100%;
    width: 100%;

    @media(min-width: ${breakpoints.medium}){
        object-fit:cover
    }
`

const TextContainer = styled.div`
    color: ${colors.white}; 
    margin: auto 0;
    position: relative;
    bottom: 8rem;
    text-align:center;

    @media(min-width: ${breakpoints.medium}){
        bottom: 9rem;
    }
`

const Title = styled.h1`
    font-size: 1.9rem;
    margin: 0 auto;
    max-width: 90%;
    line-height: 1.2;

    @media(min-width: ${breakpoints.medium}){
        font-size: 2.5rem;
    }
`

const Subtitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 300;

    @media (min-width: ${breakpoints.medium}){
        font-size: 1.5rem;
        font-weight: 400;
    }
`
// this component is a container for an image and other container with text

const SplashHeader: React.FC<SplashHeaderProps> = () => {
  return (
    <SplashContainer>
        <ImageSplash src={splashImg}/>
        <TextContainer>
            <Subtitle>Productos de excelencia</Subtitle>
            <Title>DESDE HACE MAS DE UNA DECADA</Title>
        </TextContainer>
    </SplashContainer>
  )
}

export default SplashHeader
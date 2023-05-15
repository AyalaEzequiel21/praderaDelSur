import React from 'react'
import splashImg from '../../assets/splash3.jpg'
import { ImageSplash, SplashContainer, Subtitle, TextContainer, Title } from '.'

interface SplashHeaderProps {
}


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
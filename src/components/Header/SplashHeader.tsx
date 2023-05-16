import React from 'react'
import splashImg from '../../assets/splash3.jpg'
import { ImageSplashStyle, SplashContainerStyle, SubtitleStyle, TextContainerStyle, TitleStyle } from '.'

interface SplashHeaderProps {
}


// this component is a container for an image and other container with text

const SplashHeader: React.FC<SplashHeaderProps> = () => {
  return (
    <SplashContainerStyle>
        <ImageSplashStyle src={splashImg}/>
        <TextContainerStyle>
            <SubtitleStyle>Productos de excelencia</SubtitleStyle>
            <TitleStyle>DESDE HACE MAS DE UNA DECADA</TitleStyle>
        </TextContainerStyle>
    </SplashContainerStyle>
  )
}

export default SplashHeader
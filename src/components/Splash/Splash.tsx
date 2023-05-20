import React from 'react';
import splashImg from '../../assets/splash3.jpg'
import { ImageSplashStyle, SplashContainerStyle, SubtitleStyle, TextContainerStyle, TitleStyle } from './styled-component/splash.styled';

export interface SplashProps {
}

const Splash: React.FC<SplashProps> = () => {
	return (
		<SplashContainerStyle>
		<ImageSplashStyle src={splashImg}/>
          <TextContainerStyle>
			<SubtitleStyle>Productos de excelencia</SubtitleStyle>
			<TitleStyle>DESDE HACE MAS DE UNA DECADA</TitleStyle>
          </TextContainerStyle>
		</SplashContainerStyle>
	);
};

export default Splash;

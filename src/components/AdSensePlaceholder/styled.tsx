import styled from '@emotion/styled';
import { Measurment } from './index';

type AdSensPlaceholderProps = {
  mobile: Record<Measurment, string>
  desktop: Record<Measurment, string>
}
export const AdSensePlaceholderStyled = styled.ins`
  display: block;
  width: ${(props: AdSensPlaceholderProps) => props.mobile.width};
  height: ${(props: AdSensPlaceholderProps) => props.mobile.height};
  margin: 0 auto 40px;
  background: #C4C4C4;

  @media only screen and (min-width: 690px) {
    width: ${(props: AdSensPlaceholderProps) => props.desktop.width};
    height: ${(props: AdSensPlaceholderProps) => props.desktop.height};
  }
`;

type AdvertisementStyled = {
  mobileWidth: string,
  desktopWidth: string
}
export const AdvertisementStyled = styled.div`
  width: ${(props: AdvertisementStyled) => props.mobileWidth};
  text-align: center;
  color: #A1A1A1;
  font-family: Poppins;
  font-size: 11px;
  margin: 40px auto 0;

  @media only screen and (min-width: 690px) {
    width: ${(props: AdvertisementStyled) => props.desktopWidth}
  }
`;

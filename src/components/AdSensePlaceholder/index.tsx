import React, { useEffect } from 'react';

import { pushToAdsbygoogle } from '../../events';
import { AdSensePlaceholderStyled, AdvertisementStyled } from './styled';

export type Measurment = 'width' | 'height'
type AdSensPlaceholderProps = {
  mobileMeasurments?: Record<Measurment, string>,
  desktopMeasurments?: Record<Measurment, string>
}

const defaultMobile = {
  width: '300px',
  height: '250px',
};

const defaultDesktop = {
  width: '720px',
  height: '90px',
};

const AdSensePlaceholder = ({ mobileMeasurments = defaultMobile, desktopMeasurments = defaultDesktop }: AdSensPlaceholderProps) => {
  useEffect(() => {
    pushToAdsbygoogle();
  }, []);

  return (
    <div>
      <AdvertisementStyled
        mobileWidth={mobileMeasurments.width}
        desktopWidth={desktopMeasurments.width}
      >
        ADVERTISEMENT
      </AdvertisementStyled>
      <AdSensePlaceholderStyled
        className="adsbygoogle"
        data-ad-client="ca-pub-2910351605291781"
        data-ad-slot="8521368831"
        mobile={mobileMeasurments}
        desktop={desktopMeasurments}
      />
    </div>
  );
};

export default AdSensePlaceholder;

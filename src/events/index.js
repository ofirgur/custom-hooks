// wrap wazimo wz.logger.track('stats', '{ EVENT_NAME }');
export const sendWazimoEvent = (
  event,
  description,
  state = 'emailWidgetEvent',
) => {
  try {
    const logger = window.wz ? window.wz.logger : window.wz.external;
    logger && logger.track && logger.track(
      state,
      event,
      { action: description },
    );
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
  }
};

export const pushToAdsbygoogle = () => {
  (window.adsbygoogle = window.adsbygoogle || []).push({});
};

export const injectAdsScript = () => {
  const script = document.createElement('script');
    script.setAttribute('data-ad-client', 'ca-pub-2910351605291781');
    script.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    document.head.appendChild(script);
};

export const resetScrollPositionBeforeUnload = () => {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
};

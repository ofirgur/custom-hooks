import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopProps = {
  children: any;
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;

import React, { Fragment } from 'react';
import { Responsive } from 'semantic-ui-react';

export const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

export const isMobile = () => {
  const width = getWidth();
  return width < Responsive.onlyTablet.minWidth;
};

export const isTablet = () => {
  const width = getWidth();
  const isTablet =
    Responsive.onlyMobile.maxWidth < width < Responsive.onlyComputer.minWidth;
  return isTablet;
};

export const isComputer = () => {
  const width = getWidth();
  return width > Responsive.onlyTablet.maxWidth;
};

export const ComputerOnly = ({ children }) => {
  return (
    <Responsive as={Fragment} {...Responsive.onlyComputer} getWidth={getWidth}>
      {children}
    </Responsive>
  );
};

export const TabletPlus = ({ children }) => {
  return (
    <Responsive
      as={Fragment}
      getWidth={getWidth}
      minWidth={Responsive.onlyTablet.minWidth}
    >
      {children}
    </Responsive>
  );
};

export const TabletOnly = ({ children }) => {
  return (
    <Responsive as={Fragment} {...Responsive.onlyTablet} getWidth={getWidth}>
      {children}
    </Responsive>
  );
};

export const TabletMinus = ({ children }) => {
  return (
    <Responsive
      as={Fragment}
      getWidth={getWidth}
      maxWidth={Responsive.onlyTablet.maxWidth}
    >
      {children}
    </Responsive>
  );
};

export const MobileOnly = ({ children }) => {
  return (
    <Responsive as={Fragment} {...Responsive.onlyMobile} getWidth={getWidth}>
      {children}
    </Responsive>
  );
};

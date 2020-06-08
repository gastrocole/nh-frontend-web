import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from './DesktopNavigation';

import { Container, Responsive } from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const DesktopContainer = (props) => {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <NavigationBar />
      <Container>{props.children}</Container>
    </Responsive>
  );
};

DesktopContainer.propTypes = { children: PropTypes.node };

export default DesktopContainer;

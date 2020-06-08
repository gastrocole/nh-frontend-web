import React from 'react';
import PropTypes from 'prop-types';

import { Responsive } from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const MobileContainer = (props) => {
  return (
    <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      Mobile version of layout and navigation is yet to be implemented
    </Responsive>
  );
};

MobileContainer.propTypes = { children: PropTypes.node };

export default MobileContainer;

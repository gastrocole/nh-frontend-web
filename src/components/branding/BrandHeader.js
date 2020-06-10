import React from 'react';

import { Header } from 'semantic-ui-react';

function Logo(props) {
  return <Header {...props}>NEIGHBOURHOOD</Header>;
}

Logo.propTypes = Header.propTypes;

export default Logo;

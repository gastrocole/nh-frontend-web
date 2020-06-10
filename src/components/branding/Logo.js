import React from 'react';

import { Image } from 'semantic-ui-react';

import LogoSource from '../../images/Logo.png';

function Logo(props) {
  return <Image {...props} src={LogoSource} />;
}

Logo.propTypes = Image.propTypes;

export default Logo;

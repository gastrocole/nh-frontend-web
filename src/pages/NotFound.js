import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Segment, Search } from 'semantic-ui-react';

const NotFound = ({ mobile = false }) => {
  return (
    <Segment
      inverted
      textAlign='center'
      style={{
        minHeight: 700,
        padding: '1em 0em',
        position: 'absolute',
        left: 0,
        right: 0,
      }}
      vertical
    >
      <Container text>
        <Header
          as='h1'
          content={`404`}
          inverted
          style={{
            fontFamily: 'Open Sans',
            fontStyle: 'black',
            fontWeight: 'bold',
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content={'Page Not Found'}
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
            marginBottom: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Search size='huge' />
      </Container>
    </Segment>
  );
};

NotFound.propTypes = {
  mobile: PropTypes.bool,
};

export default NotFound;

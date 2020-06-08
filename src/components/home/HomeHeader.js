import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Segment, Search } from 'semantic-ui-react';

const HomeHeader = ({ mobile }) => {
  const neighbourhood = {
    primary: 'Surbiton',
    secondary: 'Tooting',
  };

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
          content={`Welcome to ${neighbourhood.primary}`}
          inverted
          style={{
            fontFamily: 'Open Sans',
            fontStyle: 'black',
            fontWeight: 'bold',
            fontSize: mobile ? '2em' : '4em',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content={`Search ${neighbourhood.primary} for local businesses...`}
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

HomeHeader.propTypes = {
  mobile: PropTypes.bool,
};

export default HomeHeader;

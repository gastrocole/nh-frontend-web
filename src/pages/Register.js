import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Segment, Header, Icon, Button } from 'semantic-ui-react';

import RegisterForm from '../components/register/RegisterForm';

function Register(props) {
  const containerStyle = {
    marginTop: '100px',
  };

  return (
    <Fragment>
      <Container style={containerStyle}>
        <RegisterForm />
      </Container>
    </Fragment>
  );
}

Register.propTypes = {};

export default Register;

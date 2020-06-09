import React, { Fragment } from 'react';
import { Segment, Header, Icon, Step } from 'semantic-ui-react';
import SimpleRegisterForm from './SimpleRegisterForm';

export default function RegisterForm() {
  return (
    <Fragment>
      <Segment.Group>
        <Segment>
          <Header>Register An Account</Header>
        </Segment>
        <Segment>
          <SimpleRegisterForm />
        </Segment>
      </Segment.Group>
    </Fragment>
  );
}

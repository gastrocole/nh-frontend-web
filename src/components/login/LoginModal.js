import LoginForm from "./LoginForm";

import React from "react";
import { Button, Modal, Grid } from "semantic-ui-react";

const LoginModal = () => {
  return (
    <Modal
      size='mini'
      trigger={<Button>Log In</Button>}
      closeIcon
      dimmer='inverted'
      centered={false}
    >
      <Modal.Header align='middle'>Log In To Your Account</Modal.Header>
      <Modal.Content>
        <Grid columns={1} padded>
          <Grid.Column sixteen wide column>
            <LoginForm />
          </Grid.Column>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;

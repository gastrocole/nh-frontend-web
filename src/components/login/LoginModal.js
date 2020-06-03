import LoginForm from "./LoginForm";

import React from "react";
import { Button, Modal, Grid } from "semantic-ui-react";

const LoginModal = () => {
  return (
    <Modal size='mini' trigger={<Button>Log In</Button>}>
      <Modal.Header align='middle'>Log In To Your Account</Modal.Header>

      <Modal.Content>
        <Grid centered>
          <LoginForm />
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;

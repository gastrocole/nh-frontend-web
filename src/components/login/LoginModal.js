import LoginForm from './LoginForm';

import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const LoginModal = () => {
  return (
    <Modal
      size='mini'
      trigger={<Button>Log In</Button>}
      dimmer='blurring'
      centered={false}
      closeIcon
    >
      <Modal.Header align='middle'>Log In To Your Account</Modal.Header>
      <Modal.Content>
        <LoginForm />
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;

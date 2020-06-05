// Standard imports:
import React from 'react';

// Imported components by library:
import { Button, Modal } from 'semantic-ui-react';

// Custom components:
import LoginForm from './LoginForm';

const LoginModal = () => {
  return (
    <Modal
      size='mini'
      trigger={<Button>Log In</Button>}
      dimmer='blurring'
      centered={false}
      closeIcon
    >
      <Modal.Header align='middle'>Welcome Back To Neighbourhood</Modal.Header>
      <Modal.Content>
        <LoginForm />
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;

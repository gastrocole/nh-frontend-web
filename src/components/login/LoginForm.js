// Standard imports:
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Imported components by library:
import { Button, Form, Grid } from 'semantic-ui-react';

// Custom components:
import LoginMessages from './LoginMessages';

// Actions:
import { loginUser } from '../../actions/auth';

const Login = ({ loginUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  return (
    <Form error onSubmit={(e) => onSubmit(e)}>
      <Grid centered>
        <Grid.Column width={16}>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength='6'
            onChange={(e) => onChange(e)}
            required
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <LoginMessages />
        </Grid.Column>
        <Grid.Column width={16} textAlign='center'>
          <Button.Group>
            <Button content='Register' />
            <Button.Or />
            <Button positive type='submit' value='Login' content='Log In' />
          </Button.Group>
        </Grid.Column>
      </Grid>
    </Form>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(Login);

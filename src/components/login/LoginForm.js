import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/auth';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import LoginMessages from './LoginMessages';

const Login = ({ loginUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  //does this set data for all [name: value] pairs of target??
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log('submitted');
    e.preventDefault();
    loginUser(formData);
  };

  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/Home' />;
  }

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
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(Login);

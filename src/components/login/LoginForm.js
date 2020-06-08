import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Button, Form, Grid } from 'semantic-ui-react';

const Login = ({ login, isAuthenticated }) => {
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
    e.preventDefault();
    login(formData);
  };

  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/Home' />;
  }

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Grid>
        <Grid.Row>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
            className='sixteen wide column'
          />
        </Grid.Row>
        <Grid.Row>
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
            className='sixteen wide column'
          />
        </Grid.Row>
        <Grid.Row centered>
          <Button.Group>
            <Button content='Register' />
            <Button.Or />
            <Button positive type='submit' value='Login' content='Log In' />
          </Button.Group>
        </Grid.Row>
      </Grid>
    </Form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

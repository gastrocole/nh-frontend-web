import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Grid, Form, Button } from 'semantic-ui-react';

import { registerUser } from '../../actions/auth';

function SimpleRegisterForm({ registerUser }) {
  const initialState = { name: '', email: '', password: '', type: 'MEMBER' };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectAccountType = (e, { value }) => {
    setFormData({ ...formData, type: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    registerUser(formData);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Grid stackable stretched>
        <Grid.Column width={16}>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Name'
            placeholder='Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Form.Input
            icon='at'
            iconPosition='left'
            label='Email'
            placeholder='Email Address'
            name='email'
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            minLength='8'
            required
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Retype Password'
            type='password'
            placeholder='Retype Password'
            name='password2'
            minLength='8'
            required
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Form.Group inline>
            <label>
              <strong>Account Type</strong>
            </label>
            <Form.Radio
              label='Member'
              value='MEMBER'
              checked={formData.type === 'MEMBER'}
              onChange={handleSelectAccountType}
            />
            <Form.Radio
              label='Partner'
              value='PARTNER'
              checked={formData.type === 'PARTNER'}
              onChange={handleSelectAccountType}
            />
            <Form.Radio
              label='Moderator'
              value='MODERATOR'
              checked={formData.type === 'MODERATOR'}
              onChange={handleSelectAccountType}
            />
            <Form.Radio
              label='Administrator'
              value='ADMINISTRATOR'
              checked={formData.type === 'ADMINISTRATOR'}
              onChange={handleSelectAccountType}
            />
          </Form.Group>
        </Grid.Column>
        <Grid.Column width={16}>
          <Form.Checkbox label='I agree to the Terms and Conditions' />
        </Grid.Column>
        <Grid.Column width={16}>
          <Button
            size='large'
            positive
            value='Login'
            content='Register'
            type='submit'
          />
        </Grid.Column>
      </Grid>
    </Form>
  );
}

SimpleRegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

export default connect(null, { registerUser })(SimpleRegisterForm);

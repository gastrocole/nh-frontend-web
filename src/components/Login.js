import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import { Button, Form, Modal, Grid, Divider } from "semantic-ui-react";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  // do you need const when writing functions?
  //does this set data for all [name: value] pairs of target??
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password }); //does this also need to be an object?
  };

  //redirect if logged in
  if (isAuthenticated) {
    console.log("redirect");
    //redirect to their neighbourhood landing page
  }

  //need to update all classNames and styling
  /*can you do onSubmit (below) this without putting the arrow function in? e.g this.onSubmit*/
  return (
    <Fragment>
      <Modal size='mini' trigger={<Button>Log In</Button>}>
        <Modal.Header align='middle'>Log In To Your Account</Modal.Header>

        <Modal.Content>
          <Grid centered>
            <Form onSubmit={(e) => onSubmit(e)}>
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
              <Modal.Actions>
                <Button.Group>
                  <Button content='Register' />
                  <Button.Or />
                  <Button
                    positive
                    type='submit'
                    value='Login'
                    content='Log In'
                  />
                </Button.Group>
              </Modal.Actions>
            </Form>
          </Grid>
        </Modal.Content>
      </Modal>

      <p className='my-1'>
        Don't have an account? Register //insert link to register
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

//why does this have curly brackets after arrow??
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);


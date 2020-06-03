import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { Button, Form } from "semantic-ui-react";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    console.log("redirect");
    //redirect to their neighbourhood landing page
  }

  //need to update all classNames and styling
  return (
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
      <Button.Group>
        <Button content='Register' />
        <Button.Or />
        <Button positive type='submit' value='Login' content='Log In' />
      </Button.Group>
    </Form>
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

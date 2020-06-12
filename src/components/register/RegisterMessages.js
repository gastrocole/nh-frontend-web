//Standard imports:
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Imported components:
import { Message } from 'semantic-ui-react';

const RegisterMessages = ({ errorMessages }) => {
  return (
    errorMessages !== null &&
    errorMessages.length > 0 && (
      <Message error>
        <Message.Header>Registration Failed</Message.Header>
        <Message.List>
          {errorMessages.map((error) => (
            <Message.Item key={error.id}>{error.message}</Message.Item>
          ))}
        </Message.List>
      </Message>
    )
  );
};

RegisterMessages.propTypes = {
  errorMessages: PropTypes.array,
};

const mapStateToProps = (state) => ({
  errorMessages: state.registerMessages.errors,
});

export default connect(mapStateToProps)(RegisterMessages);

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Message, Sticky } from 'semantic-ui-react';
import { removeNotification } from '../../actions/notifications';

import {
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  INFO_MESSAGE,
  WARNING_MESSAGE,
} from '../../types/messageTypes';

const Notification = ({ notifications, removeNotification }) => {
  const stickyStyle = {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: '50%',
  };

  const handleDismiss = (e) => {
    removeNotification(e.target.parentNode.id);
  };

  return (
    <Sticky as='div' style={stickyStyle}>
      {notifications !== null &&
        notifications.length > 0 &&
        notifications.map((message) => (
          <Message
            success={message.type === SUCCESS_MESSAGE}
            error={message.type === ERROR_MESSAGE}
            info={message.type === INFO_MESSAGE}
            warning={message.type === WARNING_MESSAGE}
            key={message.id}
            id={message.id}
            onDismiss={(e) => handleDismiss(e)}
          >
            <Message.Header>Notification</Message.Header>
            <Message.Content>{message.message}</Message.Content>
          </Message>
        ))}
    </Sticky>
  );
};

Notification.propTypes = {
  notifications: PropTypes.array,
  removeNotification: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: state.notifications.messages,
});

export default connect(mapStateToProps, { removeNotification })(Notification);

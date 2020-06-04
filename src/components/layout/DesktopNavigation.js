import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginModal from '../login/LoginModal';

import Logo from '../../images/Logo.png';

import { logoutUser } from '../../actions/auth';

import { Button, Container, Image, Menu } from 'semantic-ui-react';

const NavigationBar = ({ auth: { isAuthenticated, loading }, logoutUser }) => {
  const guestMenuItems = (
    <Fragment>
      <Menu.Item position='right'>
        <Link to='/home'>Home</Link>
      </Menu.Item>
      <Menu.Item as='a'>Neighbourhoods</Menu.Item>
      <Menu.Item as='a'>Membership</Menu.Item>
      <Menu.Item as='a'>Our Story</Menu.Item>
      <Menu.Item>
        <LoginModal />
      </Menu.Item>
    </Fragment>
  );

  const userMenuItems = (
    <Fragment>
      <Menu.Item position='right' active>
        <Link to='/home'>Home</Link>
      </Menu.Item>
      <Menu.Item as='a'>Neighbourhoods</Menu.Item>
      <Menu.Item as='a'>Membership</Menu.Item>
      <Menu.Item as='a'>Our Story</Menu.Item>
      <Menu.Item>
        <Button onClick={logoutUser}>Logout</Button>
      </Menu.Item>
    </Fragment>
  );

  return (
    <Menu fixed='top' inverted secondary size='small' borderless compact>
      <Container>
        <Menu.Item>
          <Image size='mini' src={Logo} />
        </Menu.Item>
        <Menu.Item
          headercontent='NEIGHBOURHOOD'
          inverted
          style={{
            fontFamily: 'Open Sans',
            fontStyle: 'black',
            fontWeight: 'bold',
            fontWeight: 'normal',
          }}
        >
          NEIGHBOURHOOD
        </Menu.Item>
        {!loading && (
          <Fragment>
            {isAuthenticated ? userMenuItems : guestMenuItems}
          </Fragment>
        )}
      </Container>
    </Menu>
  );
};

NavigationBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(NavigationBar);

import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginModal from '../login/LoginModal';

import Logo from '../../images/Logo.png';

import { Button, Container, Image, Menu } from 'semantic-ui-react';
import LogoutButton from '../logout/LogoutButton';

const NavigationBar = ({ auth: { isAuthenticated, loading }, logoutUser }) => {
  const guestMenuItems = (
    <Fragment>
      <Menu.Item as={NavLink} exact to='/' content='Home' position='right' />
      <Menu.Item
        as={NavLink}
        exact
        to='/neighbourhoods'
        content='Neighbourhoods'
      />
      <Menu.Item as={NavLink} exact to='/membership' content='Membership' />
      <Menu.Item as={NavLink} exact to='/story' content='Our Story' />
      <Menu.Item>
        <LoginModal />
      </Menu.Item>
    </Fragment>
  );

  const userMenuItems = (
    <Fragment>
      <Menu.Item
        as={NavLink}
        exact
        to='/home'
        content='Home'
        position='right'
      />
      <Menu.Item
        as={NavLink}
        exact
        to='/neighbourhoods'
        content='Neighbourhoods'
      />
      <Menu.Item as={NavLink} exact to='/membership' content='Membership' />
      <Menu.Item as={NavLink} exact to='/story' content='Our Story' />

      <Menu.Item>
        <Button primary>Dashboard</Button>
      </Menu.Item>
      <Menu.Item>
        <LogoutButton />
      </Menu.Item>
    </Fragment>
  );

  return (
    <Menu
      as='Nav'
      fixed='top'
      inverted
      secondary
      size='small'
      borderless
      compact
    >
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

export default connect(mapStateToProps)(NavigationBar);

import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import {
  Button,
  Container,
  Menu,
  Visibility,
  MenuItem,
  Dropdown,
} from 'semantic-ui-react';

import {
  TabletPlus,
  MobileOnly,
  isMobile,
} from '../responsive/display-conditions';
import Logo from '../branding/Logo';
import BrandHeader from '../branding/BrandHeader';
import LoginModal from '../login/LoginModal';
import LogoutButton from '../logout/LogoutButton';

const Navigation = ({ auth: { isAuthenticated, loading }, children }) => {
  const initialState = {
    calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: true,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
    },
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({ mobile: isMobile(), ...state });
  }, []);

  const handleUpdate = (e, { calculations }) => {
    setState({ calculations, mobile: isMobile() });
  };

  const menuLogo = (
    <MenuItem>
      <Logo size='mini' />
    </MenuItem>
  );

  const menuHeader = (
    <Menu.Item as={Link} exact to='/'>
      <BrandHeader />
    </Menu.Item>
  );

  const guestItems = (
    <Fragment>
      <Menu.Item />
      <Menu.Item as={NavLink} exact to='/membership' content='Membership' />
      <Menu.Item as={NavLink} exact to='/partners' content='Partners' />
      <Menu.Item>
        <LoginModal />
      </Menu.Item>
    </Fragment>
  );

  const memberItems = (
    <Fragment>
      <Menu.Item />
      <Menu.Item
        as={NavLink}
        exact
        to='/neighbourhoods'
        content='My Neighbourhood'
      />
      <Menu.Item>
        <Button.Group>
          <Button as={NavLink} exact to='/dashboard' primary>
            Dashboard
          </Button>
          <LogoutButton />
        </Button.Group>
      </Menu.Item>
    </Fragment>
  );

  const partnerItems = (
    <Fragment>
      <Menu.Item />
      <Menu.Item as={NavLink} exact to='/businesses' content='My Business' />
      <Menu.Item>
        <Button.Group>
          <Button as={NavLink} exact to='/dashboard' primary>
            Dashboard
          </Button>
          <LogoutButton />
        </Button.Group>
      </Menu.Item>
    </Fragment>
  );

  const mobileMenu = (
    <Dropdown item icon='sidebar'>
      <Dropdown.Menu>
        {!isAuthenticated ? guestItems : memberItems}
      </Dropdown.Menu>
    </Dropdown>
  );

  return (
    <Fragment>
      <Menu
        as='Nav'
        fixed='top'
        primary={state.mobile ? state.mobile : state.calculations.topPassed}
        secondary={state.mobile ? false : state.calculations.topVisible}
        size='massive'
        borderless
      >
        <Container>
          {menuLogo}
          {menuHeader}
          <Menu.Menu position='right'>
            {!loading && (
              <Fragment>
                <TabletPlus>
                  {!isAuthenticated ? guestItems : memberItems}
                </TabletPlus>
                <MobileOnly>{mobileMenu}</MobileOnly>
              </Fragment>
            )}
          </Menu.Menu>
        </Container>
      </Menu>
      <Visibility continuous onUpdate={handleUpdate}>
        {children}
      </Visibility>
    </Fragment>
  );
};

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navigation);

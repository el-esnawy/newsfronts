import React from "react";
import { Divider, Icon } from "semantic-ui-react";
import { Dropdown, Menu } from "semantic-ui-react";

import { Link } from "react-router-dom";

const SignedInNav = () => {
  return (
    <React.Fragment>
      <Menu.Item as={Link} to='/favorites'>
        Favorites
      </Menu.Item>
      <Menu.Item className='grid-center dropdown'>
        <Dropdown floating fluid labeled text='User'>
          <Dropdown.Menu direction='left'>
            <Dropdown.Item as={Link} to='/myprofile'>
              <Icon name='user' fitted />
              Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to='/bookmarks'>
              <Icon name='bookmark' fitted />
              Bookmarks
            </Dropdown.Item>

            <Dropdown.Item as={Link} to='/mysubscriptions'>
              <Icon name='star' fitted />
              Subscriptions
            </Dropdown.Item>

            <Divider />
            <Dropdown.Item>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </React.Fragment>
  );
};

export default SignedInNav;

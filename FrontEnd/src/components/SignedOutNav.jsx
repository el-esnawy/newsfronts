import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignedOutNav = () => {
  return (
    <React.Fragment>
      <Menu.Item></Menu.Item>
      <Menu.Item as={Link} to='/signup'>
        Sign Up
      </Menu.Item>
      <Menu.Item as={Link} to='/login'>
        Log In
      </Menu.Item>
    </React.Fragment>
  );
};

export default SignedOutNav;

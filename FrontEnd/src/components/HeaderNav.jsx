import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { Form, Icon } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";

import { useHistory } from "react-router-dom";
import useBreakPoint from "../hooks/useBreakPoint";
import styled from "styled-components";

// import SignedInNav from "./SignedInNav";
// import SignedOutNav from "./SignedOutNav";

const MenuHeader = styled(Menu)`
  background-color: #334257 !important;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;

const BetaTag = styled.sub`
  margin-left: 0.5rem;
  background-color: #fff;
  color: #334257;
  font-size: 1.2rem;
  font-weight: 800;
  padding: 0.2rem;
  border-radius: 4px;
  box-shadow: inset 0 6px 8px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(0, 0, 0, 0.25);
  border: 2px solid #93b5c6;
`;

const SearchIcon = styled.div`
  box-sizing: border-box;
  display: grid !important;
  place-items: center !important;
  color: #fff;
  background-color: #93b5c6;
  padding: 0.5rem;
  border-radius: 100%;
  border: 1px solid #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  & > * {
  }
`;

const Brand = styled(Menu.Item)`
  justify-content: space-between;
`;

const HeaderNav = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  // const [loggedIn, setloggedIn] = useState(false);
  const belowBP = useBreakPoint(770);

  const searchTerm = useRef(null);
  const searchHandler = (e) => {
    e.preventDefault();

    history.replace(`/search/${searchTerm.current.value}`);
    searchTerm.current.value = "";
  };

  const showSearchBar = () => {
    setShowSearch((prev) => !prev);
  };
  return (
    <MenuHeader
      pointing
      inverted
      style={{ borderRadius: 0, paddingRight: "3rem", marginBottom: 0 }}
      stackable>
      <Brand>
        <Menu.Header className='header' as={Link} to='/'>
          NewsFronts<BetaTag>BETA</BetaTag>
        </Menu.Header>
        {belowBP && (
          <SearchIcon onClick={showSearchBar}>
            <i className='fas fa-search'></i>
          </SearchIcon>
        )}
      </Brand>
      {belowBP && showSearch ? (
        <Menu.Item size='large' style={{ width: "30vw", marginRight: "auto" }}>
          <Form
            style={{ width: "100%" }}
            onSubmit={searchHandler}
            size='large'
            inverted>
            <Form.Input
              style={{ width: "100%" }}
              icon
              placeholder='Search...'
              onSubmit={searchHandler}>
              <input ref={searchTerm} />
              <Icon name='search' />
            </Form.Input>
          </Form>
        </Menu.Item>
      ) : (
        !belowBP && (
          <Menu.Item
            size='large'
            style={{ width: "30vw", marginRight: "auto" }}>
            <Form
              style={{ width: "100%" }}
              onSubmit={searchHandler}
              size='large'
              inverted>
              <Form.Input
                style={{ width: "100%" }}
                icon
                placeholder='Search...'
                onSubmit={searchHandler}>
                <input ref={searchTerm} />
                <Icon name='search' />
              </Form.Input>
            </Form>
          </Menu.Item>
        )
      )}
      {/* {false ? <SignedInNav /> : <SignedOutNav />} */}
    </MenuHeader>
  );
};

export default HeaderNav;

import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #93b5c6;
  color: #fff;
`;

const H1 = styled.h1`
  font-size: 6rem !important;
  text-shadow: 0 6px 12px rgba(0, 0, 0.25);
`;
const H4 = styled.h4`
  font-size: 3rem !important;
  text-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

const NotBuiltScreen = () => {
  return (
    <Container>
      <H1>Coming Soon</H1>
      <Icon name='warning sign' size='massive' />
      <H4>Our App is still under construction</H4>
    </Container>
  );
};

export default NotBuiltScreen;

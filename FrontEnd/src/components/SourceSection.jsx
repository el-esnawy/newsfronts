import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import bbcLogo from "../images/BBC_logo.png";
import CNNLogo from "../images/CNN-logo.png";
import axiosLogo from "../images/1200px-Axios_logo_(2020).svg.png";
import ABCLogo from "../images/ABC-logo.png";
import ARSLogo from "../images/ARS-logo.png";

import BILogo from "../images/BI-logo.png";
import BRLogo from "../images/Bleacher-logo.png";
import BloomLogo from "../images/bloomber-logo.png";
import BreitLogo from "../images/Breitebart-logo (2).jpg";
import BuzzFeedLogo from "../images/BuzzFeed-Logo.png";
import CBCLogo from "../images/CBC-logo.png";
import CBSLogo from "../images/cbs-logo.png";
import FoxSportsLogo from "../images/fox_sports_logo.png";
import FoxNewsLogo from "../images/foxNews-logo.jpg";
import viceLogo from "../images/vice-logo.jpg";

import reutersLogo from "../images/reuters-logo.png";
import newsweekLogo from "../images/newsweek-logo.jpg";
import independent from "../images/independent-logo.png";
import nbcLogo from "../images/nbc-logo.png";

import msnbcLogo from "../images/msnbc-logo.png";

import ignLogo from "../images/ign-logo.png";

const SourceContainer = styled.div`
  height: max-content;
  padding: 1rem 3rem;
  /* background-color: hsl(0, 0%, 90.58823529411765%); */
  background-color: #93b5c6;
  /* 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 10rem)); */
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  font-size: 1rem;
`;

const SourceButton = styled(NavLink)`
  flex: 1 1 7%;
  width: max-content;
  color: #ffffff;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#ffffff")};
  transition: all 0.3s;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  padding: 0.2rem;
  display: grid;
  place-items: center;
  min-height: 3rem;

  &:hover {
    color: #000000;
    transform: translateY(-6px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.25);
  }
`;

const ImageSource = styled.img`
  max-width: 5rem;
  border-radius: 0;
  object-fit: cover;
`;

const WideImage = styled.img`
  /* min-height: 3rem;
  max-width: 18rem; */
  min-height: 3rem;
  max-width: 10rem;
  aspect-ratio: initial;
  border-radius: 0;
  object-fit: scale-down;
`;

const activeStyle = {
  boxShadow: `0 0 0 4px #93b5c6, 0 0 0 7px #334257`,
};
const SourcesSection = () => {
  return (
    <SourceContainer>
      <SourceButton activeStyle={activeStyle} to='/source/abc'>
        <ImageSource src={ABCLogo} alt='logo'></ImageSource>
      </SourceButton>
      <SourceButton activeStyle={activeStyle} to='/source/ars'>
        <ImageSource src={ARSLogo} alt='logo'></ImageSource>
      </SourceButton>
      <SourceButton activeStyle={activeStyle} to='/source/axios'>
        <ImageSource src={axiosLogo} alt='logo'></ImageSource>
      </SourceButton>
      <SourceButton activeStyle={activeStyle} to='/source/bbc'>
        <ImageSource src={bbcLogo} alt='logo'></ImageSource>
      </SourceButton>
      <SourceButton activeStyle={activeStyle} to='/source/bloomberg'>
        <ImageSource src={BloomLogo} alt='logo'></ImageSource>
      </SourceButton>
      <SourceButton activeStyle={activeStyle} to='/source/bleacher-report'>
        <ImageSource src={BRLogo} alt='logo'></ImageSource>
      </SourceButton>

      <SourceButton activeStyle={activeStyle} to='/source/business-insider'>
        <ImageSource src={BILogo} alt='logo'></ImageSource>
      </SourceButton>
      <SourceButton activeStyle={activeStyle} to='/source/breitbart'>
        <WideImage src={BreitLogo} alt='logo'></WideImage>
      </SourceButton>
      <SourceButton activeStyle={activeStyle} to='/source/buzzfeed'>
        <ImageSource src={BuzzFeedLogo} alt='logo'></ImageSource>
      </SourceButton>
      <SourceButton activeStyle={activeStyle} to='/source/cbc'>
        <ImageSource src={CBCLogo} alt='logo'></ImageSource>
      </SourceButton>
      <SourceButton activeStyle={activeStyle} to='/source/cbs'>
        <ImageSource src={CBSLogo} alt='logo'></ImageSource>
      </SourceButton>
      <SourceButton activeStyle={activeStyle} to='/source/cnn'>
        <ImageSource src={CNNLogo} alt='logo'></ImageSource>
      </SourceButton>

      <SourceButton activeStyle={activeStyle} to='/source/fox-news'>
        <ImageSource src={FoxNewsLogo} alt='logo'></ImageSource>
      </SourceButton>
      <SourceButton activeStyle={activeStyle} to='/source/fox-sport'>
        <ImageSource src={FoxSportsLogo} alt='logo'></ImageSource>
      </SourceButton>

      <SourceButton activeStyle={activeStyle} to='/source/vice-news'>
        <ImageSource src={viceLogo} alt='logo'></ImageSource>
      </SourceButton>

      <SourceButton activeStyle={activeStyle} to='/source/reuters'>
        <ImageSource src={reutersLogo} alt='logo'></ImageSource>
      </SourceButton>

      <SourceButton activeStyle={activeStyle} to='/source/newsweek'>
        <ImageSource src={newsweekLogo} alt='logo'></ImageSource>
      </SourceButton>

      <SourceButton activeStyle={activeStyle} to='/source/nbc-news'>
        <ImageSource src={nbcLogo} alt='logo'></ImageSource>
      </SourceButton>

      <SourceButton activeStyle={activeStyle} to='/source/msnbc'>
        <ImageSource src={msnbcLogo} alt='logo'></ImageSource>
      </SourceButton>

      <SourceButton activeStyle={activeStyle} to='/source/ign'>
        <ImageSource src={ignLogo} alt='logo'></ImageSource>
      </SourceButton>

      <SourceButton activeStyle={activeStyle} to='/source/independent'>
        <ImageSource src={independent} alt='logo'></ImageSource>
      </SourceButton>
    </SourceContainer>
  );
};

export default SourcesSection;

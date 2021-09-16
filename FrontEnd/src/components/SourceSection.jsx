import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import bbcLogo from "../images/BBC_logo.png";
import CNNLogo from "../images/CNN-logo.png";
import axiosLogo from "../images/1200px-Axios_logo_(2020).svg.png";
import ABCLogo from "../images/ABC-logo.png";
import ARSLogo from "../images/ARS-logo-removebg-preview.png";

import BILogo from "../images/BI-logo.png";
import BRLogo from "../images/Bleacher-logo-removebg-preview.png";
import BloomLogo from "../images/bloomber-logo-removebg-preview.png";
import BreitLogo from "../images/Breitebart-logo-removebg-preview.png";
import BuzzFeedLogo from "../images/BuzzFeed-Logo.png";
import CBCLogo from "../images/CBC-logo-removebg-preview.png";
import CBSLogo from "../images/cbs-logo-removebg-preview.png";
import FoxSportsLogo from "../images/fox_sports_logo.png";
import FoxNewsLogo from "../images/foxNews-logo.jpg";
import viceLogo from "../images/vice-logo-removebg-preview.png";

import reutersLogo from "../images/reuters-logo.png";
import newsweekLogo from "../images/newsweek-logo-removebg-preview.png";
import independent from "../images/independent-logo-removebg-preview.png";
import nbcLogo from "../images/nbc-logo.png";

import msnbcLogo from "../images/msnbc-logo.png";

import ignLogo from "../images/ign-logo-removebg-preview.png";

const SourceContainer = styled.div`
  height: max-content;
  padding: 1rem 3rem;
  /* background-color: hsl(0, 0%, 90.58823529411765%); */
  /* background-color: #93b5c6; */

  background-image: linear-gradient(to bottom right, #476072 40%, #548ca8);
  /* 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 10rem)); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 0.5rem;
  gap: 0.8rem;
  font-size: 1rem;
`;

const SourceButton = styled(NavLink)`
  flex: 0 1 10%;
  width: max-content;

  /* background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : "#ffffff"}; */
  background-image: linear-gradient(
    to bottom right,
    rgb(255, 255, 255, 0.8),
    rgb(255, 255, 255, 0.6)
  );
  filter: opacity(0.8);

  transition: all 0.3s;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  padding: 0.2rem 0.8rem;
  display: grid;
  place-items: center;
  min-height: 3rem;
  margin: 0.2rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  &:hover {
    color: #000000;
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.25);
    filter: opacity(1);
  }
  &:active {
    transform: translateY(-1px);
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
  boxShadow: `0 0 0 5px #93b5c6, 0 0 0 8px #334257`,
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

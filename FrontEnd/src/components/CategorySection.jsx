import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CategoryContainer = styled.div`
  width: 100%;
  /* background-image: linear-gradient(to bottom right, #476072 40%, #548ca8); */
  background-color: #93b5c6;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 12rem));
  justify-content: center;
  justify-items: stretch;
  gap: 1rem;
  padding: 1.5rem;
`;

const CatButton = styled(NavLink)`
  /* justify-self: center; */
  /* width: max-content; */
  /* align-self: stretch; */
  max-width: 12rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 0.5rem;

  color: #777777;
  background-image: linear-gradient(
    to bottom right,
    rgb(255, 255, 255, 0.6),
    rgb(255, 255, 255, 0.2)
  );
  filter: opacity(0.7);
  filter: blur(0.5px);
  transition: all 0.4s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
  border: 2px solid rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    background-color: #ffffff;
    transform: translateY(-4px);
    color: #000000;
    filter: blur(0px);
  }
  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 950px) {
    filter: opacity(0);
    filter: blur(0px);
  }
`;

const activeStyle = {
  backgroundColor: "#ffffff",
  color: "#000000",
  filter: "opacity(1)",
};

const CategorySection = () => {
  return (
    <CategoryContainer>
      <CatButton to='/category/headlines' activeStyle={activeStyle}>
        <i className='far fa-newspaper'></i>Headlines
      </CatButton>
      <CatButton to='/category/general' activeStyle={activeStyle}>
        <i className='fas fa-rss'></i>General News
      </CatButton>
      <CatButton activeStyle={activeStyle} to='/category/business'>
        <i className='fas fa-briefcase'></i>Business
      </CatButton>
      <CatButton activeStyle={activeStyle} to='/category/science'>
        <i className='fas fa-flask'></i>Science
      </CatButton>
      <CatButton activeStyle={activeStyle} to='/category/sports'>
        <i className='fas fa-futbol'></i>Sports
      </CatButton>
      <CatButton activeStyle={activeStyle} to='/category/technology'>
        <i className='fas fa-robot'></i>Technology
      </CatButton>
    </CategoryContainer>
  );
};

export default CategorySection;

// {
//   /* <CatButton activeStyle={activeStyle} to='/category/entertainmnent'>
//         <i className='fas fa-film'></i> Entertainment
//       </CatButton> */
// }

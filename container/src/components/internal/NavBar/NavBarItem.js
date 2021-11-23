/** @jsx jsx **/
import {css, jsx} from "@emotion/react";
import {styled} from "@mui/material";
import React from 'react';
import {NavLink} from "react-router-dom";

const GlobalContainer = styled('div')`
  display: inline-flex;
  align-content: center;
    padding: 5px 0;
    cursor: pointer;
  position: relative;
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    height: .1rem;
    transition: all .5s;
    @media (max-width: 35rem) {
      background-color: red;
      width: 1rem;
      bottom: 1rem
    }
  }
  :hover {
    & p {color: #FFF;}
    @media (max-width: 35rem) {
      & span {
        transition: all .5s;
        background-color: white;
        width: 100%;
      },
      & p:first-of-type {
        transition: color .5s;
        color: red;
      }
    },
  }
`;

const Title = styled('p')`
     color: #CDD3CE;
     text-decoration: none;
  padding: .25rem .5rem;
`;
const Indicator = styled('p')`
  color: #FFF;
  font-weight: bold;
  padding: .25rem 0;
  text-decoration: none;
`;


const NavBarItem = ({title, link, id}) => {
    return (
        <NavLink css={css`
          text-decoration: none;
        `} to={link}><GlobalContainer>
        <Indicator>{id}</Indicator><Title>{title}</Title>
        <span/>
    </GlobalContainer></NavLink>)
}

export default NavBarItem;

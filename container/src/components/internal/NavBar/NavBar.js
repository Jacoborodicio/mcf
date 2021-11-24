/** @jsx jsx **/
import React from 'react';
import {css, jsx} from "@emotion/react";
import {styled} from "@mui/material";

import NavBarItem from "./NavBarItem";

const NavButton = styled('button')`
  position: absolute;
  width: 3rem;
  height: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
  right: 1.5rem;
  background: transparent;
  border: none;

  & > div {
    cursor: pointer;
    background-color: transparent;
    position: relative;
    width: 100%;
    height: 100%;

    & span {
      transition: transform .5s ease-in-out;
      position: absolute;
      background: white;
      height: .1rem;
      width: 100%;
      left: 0;

      &:nth-of-type(1) {
        background-color: red;
        top: 0;
        transform: translateY(${(props) => props.isOpen ? 8 : 0}px) rotate(${(props) => props.isOpen ? 135 : 0}deg);

      }

    ,
    &: nth-of-type(2) {
      opacity: ${(props) => props.isOpen ? 0 : 1};
      transition-delay: ${(props) => props.isOpen ? 0 : 0.33}s;
      transition-property: opacity;
      transform: translateY(.5rem);
    },
    &: nth-of-type(3) {
      transform: translateY(${(props) => props.isOpen ? 8 : 16}px) rotate(${(props) => props.isOpen ? 45 : 0}deg);
    }
    }
  }
`;

const TopNav = styled('div')`
  width: 100%;
  height: 4rem;
  background-color: black;
`;
const GlobalContainer = styled('div')`
  display: flex;
  background: hsl(0 0% 0% / 0.5);
  @supports (backdrop-filter: blur(1rem)) {
    background: hsl(0 0% 0% / .85); // Change factor once the background images are set depending on the current mounted module
    backdrop-filter: blur(1rem);
  }
  gap: 0;
  position: fixed;
  opacity: ${({isOpen}) => isOpen ? 1 : 0};
  transform: translateX(${({isOpen}) => isOpen ? 0 : 30}vw);
  transition: all .2s;
  inset: 0 0 0 70%; // Shorthand for top, right, bottom, left
  flex-direction: column;
  justify-content: flex-start;
  padding: min(30vh, 10rem) 2rem;
}
`;

const NavBar = ({isOpen, handleNavBar, availableModules = []}) => {
    return (
        <TopNav>
            <GlobalContainer isOpen={isOpen}>
                {availableModules.map((module) => (
                    <NavBarItem key={module.id} id={module.id} title={module.name} link={module.link}/>
                ))}
            </GlobalContainer>
            <NavButton isOpen={isOpen} onClick={handleNavBar}>
                <div>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </NavButton>
        </TopNav>
    )
}

export default NavBar;

/** @jsx jsx **/
const NavButton = styled('button')`
  display: none;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  @media (max-width: 35rem) {
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 1rem;
    top: 2rem;
    right: 2rem;
    & > div {
      cursor: pointer;
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
        &:nth-child(1) {
        background-color: red;
        top: 0;
        transform: translateY(${(props) => props.isOpen ? 8 : 0}px) rotate(${(props) => props.isOpen ? 135 : 0}deg);

        },
      &:nth-child(2) {
        opacity: ${(props) => props.isOpen ? 0 : 1};
        transition-delay: ${(props) => props.isOpen ? 0 : 0.33}s;
        transition-property: opacity;
        transform: translateY(.5rem);
      },
        &:nth-child(3) {
        transform: translateY(${(props) => props.isOpen ? 8 : 16}px) rotate(${(props) => props.isOpen ? 45 : 0}deg);
      }
      }
    }
  }
`;
import React from 'react';
import {css, jsx} from "@emotion/react";
import {styled} from "@mui/material";

import NavBarItem from "./NavBarItem";

const TopNav = styled('div')`
  background-color: black;
  @media (max-width: 35rem) {
    display: block;
    background-color: black;
    min-height: 5.2rem;
    min-width: 100%;
  }
`;
const GlobalContainer = styled('div')`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  background: hsl(0 0% 0% / 0.5);
  padding-right: 2rem;
  @supports (backdrop-filter: blur(1rem)) {
    background: hsl(0 0% 0% / .7); // Change factor once the background images are set depending on the current mounted module
    backdrop-filter: blur(1rem);
  }
  @media (max-width: 35rem) {
    gap: 0;
    position: fixed;
    //display: ${({isOpen}) => isOpen ? 'block' : 'none'};
    opacity: ${({isOpen}) => isOpen ? 1 : 0};
    transform: translateX(${({isOpen}) => isOpen ? 0 : 10}rem);
    transition: all .2s;
    inset: 0 0 0 30%; // Shorthand for top, right, bottom, left
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
                <NavBarItem key={module.id} id={module.id} title={module.name} link={module.link} />
            ))}
        </GlobalContainer>
    <NavButton isOpen={isOpen} onClick={handleNavBar}>
        <div>
            <span />
            <span />
            <span />
        </div>
    </NavButton>
    </TopNav>
    )
}

export default NavBar;

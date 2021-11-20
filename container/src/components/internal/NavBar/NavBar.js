/** @jsx jsx **/
import React from 'react';
import {css, jsx} from "@emotion/react";
import {styled} from "@mui/material";
import NavBarItem from "./NavBarItem";

const GlobalContainer = styled('div')`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  background: hsl(0 0% 0% / 0.5);
  @supports (backdrop-filter: blur(1rem)) {
    background: hsl(0 0% 0% / 1);
    backdrop-filter: blur(1rem);
  }
  @media (max-width: 35rem) {
    gap: 0;
    position: fixed;
    inset: 0 0 0 30%;
    flex-direction: column;
    justify-content: flex-start;
    padding: min(30vh, 10rem) 2rem;
  }
`;

const NavButton = styled('button')`
  display: none;
  border: none;
  background: transparent;
  @media (max-width: 35rem) {
    display: flex;
    justify-content: center;
    align-content: center;
    position: absolute;
    width: 1rem;
    top: 2rem;
    right: 2rem;
    height: 1rem;
    & > p {
      color: white;
    }
  }
`;
const NavBar = ({availableModules = []}) => {
    return (
        <GlobalContainer>
            {availableModules.map((module) => (
                <NavBarItem key={module.id} id={module.id} title={module.name} link={module.link} />
            ))}
            <NavButton><p css={css('icon')}>X</p></NavButton>
        </GlobalContainer>
    )
}

export default NavBar;

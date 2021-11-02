/** @jsx jsx **/
import React from 'react';
import {css, jsx} from "@emotion/react";
import {styled} from "@mui/material";
import NavBarItem from "./NavBarItem";

const GlobalContainer = styled('div')`
    background-color: #4D2E49;
`;
const NavBar = ({availableModules = []}) => {
    return (
        <GlobalContainer>
            {availableModules.map((module, index) => (
                <NavBarItem key={index} title={module.name} link={module.link} />
            ))}
        </GlobalContainer>
    )
}

export default NavBar;

/** @jsx jsx **/
import {css, jsx} from "@emotion/react";
import {styled} from "@mui/material";
import React from 'react';
import {NavLink} from "react-router-dom";

const GlobalContainer = styled('div')`
    display: inline-block;
    padding: 5px 20px;
    cursor: pointer;
    background: #4D2E49;
    :hover {
        background: #E591F2;
        & p {color: #4D2E49;}
    }
`;

const Title = styled('p')`

     color: #CDD3CE;
     text-decoration: none;
`;

const NavBarItem = ({title, link}) => {
    return (
        <NavLink to={link}><GlobalContainer>
        <Title>{title}</Title>
    </GlobalContainer></NavLink>)
}

export default NavBarItem;

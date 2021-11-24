/** @jsx jsx **/
import React from 'react';
import {css, jsx, keyframes} from "@emotion/react";
import {styled} from "@mui/material";
import {NavLink} from "react-router-dom";

const GlobalContainer = styled('div')`
  height: calc(100vh - 4rem);
  background-color: black;
`;

const bounce = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  5% {
    transform: translate3d(15px, 50px, 0);
  }
  10% {
    transform: translate3d(35px, 100px, 0);
  }
  20% {
    transform: translate3d(50px, 200px, 0);
  }
  30% {
    transform: translate3d(65px, 300px, 0);
  }
  40% {
    transform: translate3d(75px, 400px, 0);
  }
  50% {
    transform: translate3d(90px, 300px, 0);
  }
  60% {
    transform: translate3d(125px, 200px, 0);
  }
  70% {
    transform: translate3d(150px, 300px, 0);
  }
  80% {
    transform: translate3d(175px, 400px, 0);
  }
  90% {
    transform: translate3d(200px, 300px, 0);
  }
  to {
    transform: translate3d(225px, 400px, 0);
  }
`

const Balloon = styled('div')`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: red;
  animation: ${bounce} normal 2s forwards;
`;

const splash = keyframes`
    from {
      opacity: 0;
      width: 0;
    }
  66% {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 1000px;
  }
`;
const Splash = styled('span')`
  position: absolute;
  width: 0;
  height: .1rem;
  background-color: white;
  bottom: 0;
  left: 100px;
  animation: ${splash} 3s forwards;
`;

const Landing = props => {
    console.log("In Landing")
    return (
        <GlobalContainer>
            <Balloon>
                <Splash />
            </Balloon>
        </GlobalContainer>
    );
}

export default Landing;

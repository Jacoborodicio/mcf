/** @jsx jsx **/
import React from 'react';
import {css, jsx, keyframes} from "@emotion/react";
import {styled} from "@mui/material";
import {NavLink} from "react-router-dom";
import {animated, useSpring, useTrail} from "@react-spring/web";

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
  animation: ${bounce} normal 1.2s forwards;
`;


const splash = keyframes`
    from {
      opacity: 0;
      width: 0;
    }
  66% {
    opacity: .4;
    width: 0;
  }
  to {
    opacity: .8;
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
  animation: ${splash} 1.75s forwards;
`;

const Greeting = styled('animated.div')`
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: rgb(66, 61, 63);
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity;
  overflow: hidden;
`;

const items = ["Wellcome", "Bienvenido", "Willkommen", "Benvido"];
const config = { mass: 5, tension: 2000, friction: 200 };
const Landing = props => {
    console.log("In Landing")
    const trail = useTrail(items.length, {
        config,
        opacity: 1,
        x: 20,
        height: 80,
        from: { opacity: 0, x: 20, height: 0 },
        color: 'white'
    });
    return (
        <GlobalContainer>
            <Balloon>
                <Splash />
            </Balloon>
            {trail.map(({ x, height, ...rest }, index) => (
                <Greeting
                    key={items[index]}
                    className="trails-text"
                    style={{
                        ...rest,
                        transform: () => `translate3d(0, ${x}px, 0)`
                    }}
                >
                    <animated.div style={{ height }}>{items[index]}</animated.div>
                </Greeting>
            ))}
        </GlobalContainer>
    );
}

export default Landing;

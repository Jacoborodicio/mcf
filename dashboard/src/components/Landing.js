/** @jsx jsx **/
import React from 'react';
import {css, jsx} from "@emotion/react";

const Landing = props => {
  return (
      <h1 css={css`
      background-color: red;
      min-height: 100px;
      min-width: 100px;
      `}>
        Landing Page
      </h1>
  );
}

export default Landing;

/** @jsx jsx **/
import React from 'react';
import {css, jsx} from "@emotion/react";

const Pricing = props => {
  return (
      <h1 css={css`
      background-color: red;
      min-height: 100px;
      min-width: 100px;
      `}>
        Pricing Page
      </h1>
  );
}

export default Pricing;

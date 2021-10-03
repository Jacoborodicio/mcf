/** @jsx jsx **/
import React from 'react';
import MarketingApp from "./components/external/MarketingApp";
import DashboardApp from "./components/external/DashboardApp";
import NavBar from "./components/internal/NavBar/NavBar";
import {css, jsx} from "@emotion/react";
import {availableModules} from "./config.data";
import {BrowserRouter, Route} from "react-router-dom";

export default () => {
    return (
        <div>
            <BrowserRouter>
            <NavBar availableModules={availableModules} />
            <div>
                <h2>Hi! This is part of container (main)</h2>
            </div>
            <hr/>
            <div>
                <Route path={'/marketing'}>
                    <MarketingApp />
                </Route>
                <Route path={'/dashboard'}>
                <DashboardApp />
                </Route>
            </div>
            </BrowserRouter>
        </div>
    )
};

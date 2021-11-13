/** @jsx jsx **/
import React, {lazy, Suspense} from 'react';
//import MarketingApp from "./components/external/MarketingApp";
//import DashboardApp from "./components/external/DashboardApp";
import NavBar from "./components/internal/NavBar/NavBar";
import {css, jsx} from "@emotion/react";
import {availableModules} from "./config.data";
import {BrowserRouter, Route} from "react-router-dom";

const MarketingApp = lazy(() => import("./components/external/MarketingApp"));
const DashboardApp = lazy(() => import("./components/external/DashboardApp"));
const CodeSchoolApp = lazy(() => import('./components/external/CodeSchoolApp'));
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
                    <Suspense fallback={'Loading Marketing...'}>
                        <MarketingApp />
                    </Suspense>
                </Route>
                <Route path={'/dashboard'}>
                    <Suspense fallback={'Loading Dashboard...'}>
                        <DashboardApp />
                    </Suspense>
                </Route>
                <Route path={'/code-school'}>
                    <Suspense fallback={'Loading School of Code...'}>
                        <CodeSchoolApp />
                    </Suspense>
                </Route>
                <Route path={'/'} exact>
                    <p>This is another part of the container coming from router</p>
                </Route>
            </div>
            </BrowserRouter>
        </div>
    )
};

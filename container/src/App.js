/** @jsx jsx **/
import React, {lazy, Suspense, useState} from 'react';
import {css, jsx} from "@emotion/react";
import NavBar from "./components/internal/NavBar/NavBar";
import {availableModules} from "./config.data";
import {BrowserRouter, Route} from "react-router-dom";
import {CacheProvider} from "@emotion/react";
import createCache from '@emotion/react';
import {prefixer} from "stylis";
const myCache = createCache({
    prefix: 'C',
    stylesPlugins: [prefixer]
})


const MarketingApp = lazy(() => import("./components/external/MarketingApp"));
const DashboardApp = lazy(() => import("./components/external/DashboardApp"));
const CodeSchoolApp = lazy(() => import('./components/external/CodeSchoolApp'));
const App = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div>
            <CacheProvider value={myCache}>
            <BrowserRouter>
            <NavBar availableModules={availableModules} isOpen={navOpen} handleNavBar={() => setNavOpen(!navOpen)}/>
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
                </Route>*/}
                <Route path={'/'} exact >
                    <Suspense fallback={'Loading Dashboard...'}>
                        <DashboardApp />
                    </Suspense>
                </Route>
            </div>
            </BrowserRouter>
            </CacheProvider>
        </div>
    )
};

export default App;

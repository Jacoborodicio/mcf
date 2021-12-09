import React, {lazy, Suspense} from 'react';
import {Switch, Route, Router} from "react-router-dom";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
const myCache = createCache({
    key: 'marketing',
    stylesPlugins: [prefixer]
})
const Landing = lazy(() => import('./components/Landing'));
const Prices = lazy(() => import('./components/Prices'));
export default ({history}) => {
    return (
        <div>
        <CacheProvider value={myCache}>
            <Router history={history}>
                <Switch>
                    <Route exact path='/'>
                        <Suspense fallback={'Landing...'}>
                            <Landing />
                        </Suspense>
                    </Route>
                    <Route exact path={'/prices'}>
                    <Suspense fallback={'Loading Pricing...'}>
                        <Prices />
                        </Suspense>
                    </Route>
                </Switch>
            </Router>
        </CacheProvider>
    </div>
    )};

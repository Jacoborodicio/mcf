import React, {lazy, Suspense} from 'react';
import {Switch, Route, Router} from "react-router-dom";
import {CacheProvider} from "@emotion/react";
import createCache from '@emotion/cache';
import {prefixer} from "stylis";
const myCache = createCache({
    key: 'dashboard',
    stylesPlugins: [prefixer]
})

const Pricing = lazy(() => import('./components/Pricing'));
const Landing = lazy(() => import('./components/Landing'));
export default ({history}) => {
    return (
        <CacheProvider value={myCache}>
        <Router history={history} basename={'/dashboard'}>
            <Switch>
                <Route exact path='/pricing'>
                    <Suspense fallback={''}>
                        <Pricing/>
                    </Suspense>
                </Route>
                <Route path='/' exact>
                    <Suspense fallback={''}>
                        <Landing/>
                    </Suspense>
                </Route>
            </Switch>
        </Router>
        </CacheProvider>
    )
};

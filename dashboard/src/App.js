import React, {lazy, Suspense} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {CacheProvider} from "@emotion/react";
import createCache from '@emotion/react';
import {prefixer} from "stylis";
const myCache = createCache({
    prefix: 'D',
    stylesPlugins: [prefixer]
})

const Pricing = lazy(() => import('./components/Pricing'));
const Landing = lazy(() => import('./components/Landing'));
export default () => {
    return (
        <CacheProvider value={myCache}>
        <BrowserRouter>
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
        </BrowserRouter>
        </CacheProvider>
    )
};

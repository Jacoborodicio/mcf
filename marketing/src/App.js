import React from 'react';
import { Switch, Route, BrowserRouter} from "react-router-dom";
import Landing from './components/Landing';
import Pricing from "./components/Pricing";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
const myCache = createCache({
    key: 'marketing',
    stylesPlugins: [prefixer]
})
export default () => {
    return (
        <div>
        <CacheProvider value={myCache}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing} />
                    <Route path='/' component={Landing} />
                </Switch>
            </BrowserRouter>
        </CacheProvider>
    </div>
    )};

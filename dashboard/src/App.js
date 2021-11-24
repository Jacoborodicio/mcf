import React, {lazy, Suspense} from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";

const Pricing = lazy(() => import('./components/Pricing'));
const Landing = lazy(() => import('./components/Landing'));
export default () => {
    return (
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
    )
};

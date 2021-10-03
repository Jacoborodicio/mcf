import React from 'react';
import { Switch, Route, BrowserRouter} from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
    console.log('in app from dashboard')
    return (
        <div>
            <p>Hola desde esta app!</p>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing} />
                    <Route path='/' component={Landing} />
                </Switch>
            </BrowserRouter>
    </div>
    )};

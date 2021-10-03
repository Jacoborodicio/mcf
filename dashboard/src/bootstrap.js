import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
// Mount function to start up the app
const mount = (el) => {
    ReactDom.render(
        <App />,
        el
    )
}

// Checking if we are and development & isolated app
if (process.env.NODE_ENV === 'development') {
    // We are in develop
    // Now checking with 'unique' id if we are running isolated
    const el = document.querySelector('#development-only-dashboard-module');
    if (el) mount(el);
}

export { mount };

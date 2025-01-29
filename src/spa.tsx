import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';

export const {bootstrap, mount, unmount} = singleSpaReact({
    React,
    ReactDOMClient,
    loadRootComponent: () => import('./App').then((module) => module),
    errorBoundary(e, info, props) {
        console.log(e, info, props);
        // https://reactjs.org/docs/error-boundaries.html
        return <div>This renders when a catastrophic error occurs</div>;
    },
});

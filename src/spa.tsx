import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';

export const {bootstrap, mount, unmount, update} = singleSpaReact({
    React,
    ReactDOMClient,
    loadRootComponent: () => import('./root').then((module) => module.Root),
    errorBoundary(e, info, props) {
        console.error('Error occurred:', e, info, props);
        return <div>This renders when a catastrophic error occurs</div>;
    },
});
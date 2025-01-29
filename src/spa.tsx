import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';

export const {bootstrap, mount, unmount} = singleSpaReact({
    React,
    ReactDOMClient,
    domElementGetter: () => document.getElementById('single-spa:main')!,
    loadRootComponent: () => import('./root').then((module) => module.Root),
    errorBoundary(e, info, props) {
        console.log(e, info, props);
        // https://reactjs.org/docs/error-boundaries.html
        return <div>This renders when a catastrophic error occurs</div>;
    },
});

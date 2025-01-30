import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import {Root} from "@/root.tsx";

function getLifecycles() {
    return waitForElement('single-spa:main')
        .then(element => {
            return singleSpaReact({
                React,
                ReactDOMClient,
                domElementGetter: () => element as HTMLElement,
                rootComponent: () => <Root />,
                errorBoundary(e, info, props) {
                    console.error('Error occurred:', e, info, props);
                    return <div>This renders when a catastrophic error occurs</div>;
                },
            });
        })
        .catch(error => {
            console.error('Failed to find element or initialize lifecycles:', error);
        });
}

function waitForElement(selector: string, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const element = document.getElementById(selector);
        if (element instanceof HTMLElement) {
            return resolve(element);
        }

        const observer = new MutationObserver(() => {
            const foundElement = document.getElementById(selector);
            if (foundElement instanceof HTMLElement) {
                observer.disconnect();
                resolve(foundElement);
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        setTimeout(() => {
            observer.disconnect();
            reject(new Error(`Timeout: Element '${selector}' not found`));
        }, timeout);
    });
}


export const {bootstrap, mount, unmount} = {
    bootstrap: (props: any) => getLifecycles().then(lifecycles => lifecycles?.bootstrap(props)),
    mount: (props: any) => getLifecycles().then(lifecycles => lifecycles?.mount(props)),
    unmount: (props: any) => getLifecycles().then(lifecycles => lifecycles?.unmount(props)),
}

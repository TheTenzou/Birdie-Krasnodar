import React, {Component, lazy, Suspense} from 'react';
import {render} from 'react-dom';
import App from "./App"
const MyComp = lazy(() => import('./test'));

render(
    <>
        <h1>Helloworld React!</h1>
        <Suspense fallback={<div>Loading....</div>}>
            <MyComp></MyComp>
        </Suspense>
    </>,
    // <App />,
    document.getElementById('root')
);
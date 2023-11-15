import React from 'react';
import { hydrate, render } from "react-dom";
import App from './components/app/app';
import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <App />
// );

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyles} from './styles/global';
import {BrowserRouter} from "react-router-dom";
import './index.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
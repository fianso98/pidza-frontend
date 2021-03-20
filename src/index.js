import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter}from 'react-router-dom';
import {ConsultProvider} from './Context/ConsultContext'
import {LoginProvider} from "./Context/LoginContext"
import {CommandeProvider} from "./Context/CommandeContext"
import {ResConsultProvider} from './Context/ResConsultContext'
import { MagasinProvider } from './Context/MagasinProcheContext';
ReactDOM.render(
  <React.StrictMode>
    <ConsultProvider>
        <LoginProvider>
          <CommandeProvider>
            <ResConsultProvider>
              <MagasinProvider>
                    <BrowserRouter>
                      <App />
                    </BrowserRouter>
              </MagasinProvider>
            </ResConsultProvider>
          </CommandeProvider>
        </LoginProvider>
    </ConsultProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

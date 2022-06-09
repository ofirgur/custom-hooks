import React from 'react';
import ReactDOM from 'react-dom';
import { injectAdsScript, resetScrollPositionBeforeUnload } from './scripts';
import WidgetsSelection from './components/WidgetsSelection';
import './index.css';

injectAdsScript();
resetScrollPositionBeforeUnload();

const rootElementSelector = document.currentScript?.getAttribute('data-root-selector') || 'root';
const widgetName = document.currentScript?.getAttribute('data-widget-name') || '';
const container = document.querySelector(`#${rootElementSelector}`);

ReactDOM.render(
  <React.StrictMode>
    <WidgetsSelection widgetName={widgetName} />
  </React.StrictMode>,
  container,
);

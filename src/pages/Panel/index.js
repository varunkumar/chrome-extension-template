import './index.css';
import Panel from './Panel';

const container =
  window.document.querySelector('#app-container') || window.document.body;
container.appendChild(Panel());

if (import.meta.webpackHot) import.meta.webpackHot.accept();

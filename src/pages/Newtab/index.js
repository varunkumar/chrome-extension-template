import './index.css';
import Newtab from './Newtab';

const container =
  window.document.querySelector('#app-container') || window.document.body;
container.appendChild(Newtab());

if (import.meta.webpackHot) import.meta.webpackHot.accept();

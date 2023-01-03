import './index.css';
import Popup from './Popup';

const container =
  window.document.querySelector('#app-container') || window.document.body;
container.appendChild(Popup());

if (import.meta.webpackHot) import.meta.webpackHot.accept();

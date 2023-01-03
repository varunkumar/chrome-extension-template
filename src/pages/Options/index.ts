import './index.css';
import Options from './Options'; // eslint-disable-line

const container: Element =
  window.document.querySelector('#app-container') || window.document.body;
container.appendChild(Options({ title: 'Settings' }));

if (import.meta.webpackHot) import.meta.webpackHot.accept();

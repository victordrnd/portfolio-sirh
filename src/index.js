import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import ArchiStage from './ArchiStage';
import ArchiFront from './ArchiFront';
import Gallery from './Gallery';
import Competence from './Competence';
//import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ArchiFront/>, document.getElementById('archifront'));
//ReactDOM.render(<ArchiStage />, document.getElementById('archistage'));
ReactDOM.render(<Gallery />, document.getElementById('gallery'));
ReactDOM.render(<Competence/>, document.getElementById('competence'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

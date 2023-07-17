import React from "react";
import ReactDOM from "react-dom";
import Counter from './components/Counter';

const div = document.querySelector('#root');

const counterComponent = React.createElement(Counter);
ReactDOM.render(counterComponent, div);
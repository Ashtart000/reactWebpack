import React from "react";
import ReactDOM from "react-dom";
import Counter from './components/Counter';
// import MyMath from './components/Math';
import * as MyMath from './components/Math';

console.log(MyMath);

const div = document.querySelector('#root');

// const counterComponent = React.createElement(Counter);

// JSX
// const counterComponent = <Counter />

ReactDOM.render(<Counter />, div);
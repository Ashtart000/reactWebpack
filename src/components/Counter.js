import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        // toDo: state.count++
        console.log('CLICK');
        //setState
        this.setState({
            count: this.state.count + 1
        })

    }

    decrement() {
        if(this.state.count > 0) {
            this.setState({
            count: this.state.count - 1
        })} else if(this.state.count <= 0) {
            this.setState({
                count: 0
            })
        }
        
    }

    render() {
        const h2 = React.createElement('h2', {}, this.state.count);
        const buttonMinus = React.createElement('button', {onClick: () => {this.decrement()}}, '-');
        const button = React.createElement('button', {onClick: () => {this.increment()}}, '+');
        // const div = React.createElement('div', {}, h2, button);
        return React.createElement(React.Fragment, {}, h2, buttonMinus, button);
    }
}

export default Counter;
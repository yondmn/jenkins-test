import React, { Component } from 'react';
import '../../styles/Clock/index.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            toggle: false
        };
        // 不进行绑定，在 hanldeTitleClick 内部 this 就是 undefined
        // this.handleTitleClick = this.handleTitleClick.bind(this);
    }

    componentDidMount() {
        this.timeId = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        console.log('distory:');
        clearInterval(this.timeId);
    }

    handleTitleClick(id, e) {
        console.log('title, click', id, e);
        this.setState((preState) => ({
            toggle: !preState.toggle
        }));
    }

    render() {
        return (
            <div>
                <h1 className="title" onClick={this.handleTitleClick.bind(this, '100000')}>Hello, Clock! { this.state.toggle ? 'ON' : 'OFF' }</h1>
                {/* <h1 className="title" onClick={() => this.handleTitleClick()}>Hello, Clock! { this.state.toggle ? 'ON' : 'OFF' }</h1> */}
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>);
    }
};

export default Clock;
import React, { Component } from 'react';

class Yform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleFormSubmit(e) {
        console.log('submit: ', this.state.value);
        e.preventDefault();
    }

    handleNameChange(e) {
        this.setState({
            value: e.target.value.toUpperCase()
        })
    }

    render() {
        return (
            <form onSubmit={ this.handleFormSubmit }>
                <label>name: <input type="text" value={ this.state.value } onChange={ this.handleNameChange } /></label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Yform;
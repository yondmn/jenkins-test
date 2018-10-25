import React, { Component } from 'react';

const scalesNames = {
    c: '摄氏温度',
    f: '华氏温度'
}

export default class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.onTemperatureChange = this.onTemperatureChange.bind(this)
    }

    onTemperatureChange(e) {
        const target = e.target;
        this.props.onTemperatureChange(target.value, this.props.scale);
    }

    render() {
        const { temperature, scale } = this.props;

        return (
            <fieldset>
                <legend>请输入{ scalesNames[scale] }</legend>
                { this.props.shazi }
                <input type="text" value={ temperature } onChange={ this.onTemperatureChange } />
                { this.props.children }
            </fieldset>
        )
    }
}
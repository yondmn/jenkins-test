import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import { toC, toF } from '../../utils';
import '../../styles/Calctor/index.less'

const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return ''
    }

    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString()
}

export default class Calctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            scale: ''
        }

        this.onTemperatureChange = this.onTemperatureChange.bind(this)
    }

    onTemperatureChange(temperature, scale) {
        this.setState({
            temperature,
            scale
        })
    }

    render() {
        const { temperature, scale } = this.state
        const celsius = scale === 'f' ? tryConvert(temperature, toC) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toF) : temperature

        return (
            <div>
                <h2>温度计算机: { this.props.children('ymymy') }</h2>
                <TemperatureInput scale='c' temperature={ celsius }
                onTemperatureChange={ this.onTemperatureChange }
                shazi={
                    <div><strong>shi ge sha zi ba</strong></div>
                }>
                    <p>这是个描述哦</p>
                </TemperatureInput>
                <TemperatureInput scale='f' temperature={ fahrenheit } onTemperatureChange={ this.onTemperatureChange }/>
            </div>
        )
    }
}
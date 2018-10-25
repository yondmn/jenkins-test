import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        console.log('SearchBar')
    }

    handleChange(e) {
        const { target } = e
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.props.onInputChange({
            [target.name]: value
        })
    }

    render() {
        const { search, isOnlyShowProInStock } = this.props
        return (
            <div>
                <p><input type="text" name="search" value={ search } onChange={ this.handleChange } /></p>
                <p>
                    <input type="checkbox" name="isOnlyShowProInStock" checked={ isOnlyShowProInStock } onChange={ this.handleChange } />
                    only show products in stock
                </p>
            </div>
        )
    }
}
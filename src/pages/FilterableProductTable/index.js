import React, { Component } from 'react'
import SearchBar from './SearccBar'
import ProductTable from './ProductTable'

const DATA = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()

        this.state = {
            search: '',
            isOnlyShowProInStock: false
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.setInputRef = this.setInputRef.bind(this)
        this.handleHaHa = this.handleHaHa.bind(this)
    }

    componentWillMount() {
        console.log('FilterableProductTable')
    }

    componentDidMount() {
        console.log(this.myRef.current)
        console.log('refs, ', this.refs)
        console.log('textInput, ', this.fileInput)
        this.fileInput.focus()
    }

    shouldComponentUpdate(nextProps, nextStates) {
        console.log('shouldComponentUpdate', nextProps, nextStates)

        return true
    }

    handleInputChange(changedItem) {
        this.setState(changedItem)
    }

    handleHaHa() {
        console.log(this.fileInput.files[0])
    }

    setInputRef(ele) {
        this.fileInput = ele
    }

    render() {
        const { search, isOnlyShowProInStock } = this.state
        const data = DATA.filter((item) => {
            return item.name.indexOf(search) > -1 && ( isOnlyShowProInStock ? item.stocked === true : true )
        })

        console.log('render, ', this.myRef.current)

        return (
            <div>
                <SearchBar search={ this.state.search } isOnlyShowProInStock={ this.state.isOnlyShowProInStock } onInputChange={ this.handleInputChange }/>
                <ProductTable ref={ this.myRef } data={ data }/>
                <section><input ref={ this.setInputRef } type="file" /></section>
                <section ref={ this.myRef } onClick={ this.handleHaHa }>哈哈</section>
            </div>
        )
    }
}
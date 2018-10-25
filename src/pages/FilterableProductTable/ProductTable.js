import React, { Component } from 'react'
import PropTypes from 'prop-types';

const ProductCategoryRow = (props) => {
    return <tr><th colSpan="2">{props.category}</th></tr>
}

const ProductRow = (props) => {
    return (
        <tr style={{'color': !props.item.stocked ? 'red' : 'green'}}>
            <td>{ props.item.name }</td><td>{ props.item.price }</td>
        </tr>
    )
}

export default class ProductTable extends Component {

    shouldComponentUpdate(nextProps, nextStates) {
        console.log('ProducTable shouldComponentUpdate', nextProps, nextStates)

        return true
    }

    render() {
        let rows = [], lastCategory = null
        this.props.data.forEach(item => {
            if (item.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow category={ item.category } key={ item.category } />
                )
            }
            rows.push(
                <ProductRow item={ item }  key={ item.name }/>
            )
            lastCategory = item.category
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th><th>Price</th>
                    </tr>
                </thead>
                <tbody>{ rows }</tbody>
            </table>
        )
    }
}

ProductTable.propTypes = {
    data: PropTypes.array
};
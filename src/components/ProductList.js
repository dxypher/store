import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';

export default class ProductList extends Component {
  state = {
    products: []
  }
  render() {
    return (
      // <Product/>
      <React.Fragment>  
        <div className='py-5'></div>
        <div className='container'></div>
        <Title name='our' title='products'/>
        <div className='row'></div>
      </React.Fragment>
    )
  }
}
import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../Context';

export default class ProductList extends Component {
  state = {
    products: storeProducts
  }
  render() {
    console.log(this.state.products);
    return (
      // <Product/>
      <React.Fragment>  
        <div className='py-5'></div>
        <div className='container'>        
          <Title name='our' title='products'/>
          <div className='row'>
            <ProductConsumer>
              {(value) => {
                return <h1>{value}</h1>
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
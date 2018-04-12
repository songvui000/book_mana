import React from 'react'
import SearchBarComponent from './SearchBarComponent'
import _ from 'lodash'
class FilterTableComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      products: [
       {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
       {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
       {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
       {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
       {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
       {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
     ]
    }
  }
  handleDelete(e){

    var products = _.remove(this.state.products,e)
    
  }
  render(){
    
    return(
        <SearchBarComponent products={this.state.products} delete={this.handleDelete}/>
    )
  }
}
export default FilterTableComponent
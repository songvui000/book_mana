import React,{Component} from 'react'
import ProductRowComponent from './ProductRowComponent'
class ProductCategoryComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    let {check,products,query} = this.props
    return products.map((product,index)=>{
      return  <ProductRowComponent product={product} check={check} query={query} key={index} delete={this.props.delete} id ={index}/>
    })
  }
}
export default ProductCategoryComponent
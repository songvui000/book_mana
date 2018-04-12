import React,{Component} from 'react'
import ProductCategoryComponent from './ProductCategoryComponent'
class ProductTableComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
     <table>
       <thead>
         <tr>
           <th>
             Name
           </th>
           <th>
             Price
           </th>
         </tr>
       </thead>
       <tbody>
         <ProductCategoryComponent check={this.props.check} query={this.props.query} products = {this.props.products} delete ={this.props.delete} />
       </tbody>
     </table>
    )
  }
}
export default ProductTableComponent
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
class ProductRowComponent extends Component{
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  rowss(){
    console.log(this)
    return null
  }
  handleDelete(e){
    this.props.delete($(e.target).closest("tr").attr('data-id'))
  }
  render(){
    let {product,query,check,idx} = this.props
    if (check && !product.stocked)
      return null
    else if (!product.name.includes(query))
      return null
    else if (product.name.includes(query))
      return(
        <tr onClick={()=>this.handleDelete(idx)} >
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      )
    else
    return null
  }
}

export default ProductRowComponent
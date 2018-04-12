import React from 'react'
import ProductTableComponent from './ProductTableComponent'
class SearchBarComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      check: false,
      query: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
  }
  handleInputChange(event){
    this.setState({
      query: event.target.value
    })
  }
  handleCheckBox(event){
    this.setState({
      check: !this.state.check
    })
  }
  render(){
    return(
      <div>
        <input type="checkbox"  onChange={this.handleCheckBox} />
        <input type="text" onChange={this.handleInputChange} />
        <ProductTableComponent check={this.state.check} query={this.state.query} products ={this.props.products} delete = {this.props.delete} />
      </div>
    )
  }
}
export default SearchBarComponent
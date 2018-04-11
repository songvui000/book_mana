import React from "react"
import PropTypes from "prop-types"
import InputComponent from './InputComponent'
import { withCookies, Cookies } from 'react-cookie'
class SearchComponent extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      open: false
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);            
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  setWrapperRef(node){
    this.wrapperRef = node
  }
  handleClickOutside(event){
    if(this.wrapperRef && !this.wrapperRef.contains(event.target)){
      this.setState({
        open: false
      })
    }
    else  this.setState({
      open: true
    })
  }
  componentDidMount() {
   document.addEventListener('mousedown',this.handleClickOutside)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown',this.handleClickOutside)
  }
  
  render(){
    return(
      <div ref={this.setWrapperRef}>
        <InputComponent search ={this.props.search} open= {this.state.open} />
      </div>
    )
  }
}
export default SearchComponent
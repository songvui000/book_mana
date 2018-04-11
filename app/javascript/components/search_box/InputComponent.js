import React from "react"
import PropTypes from "prop-types"
import ResultComponent from './ResultComponent'
import { withCookies, Cookies } from 'react-cookie'
class InputComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      q: '',
      list: []
    })
    this.OnBind = this.OnBind.bind(this);
    // this.onFocus = this.onFocus.bind(this);
  }
  OnBind(e){
    if (e.target.value.length > 0){
      fetch('/v1/books?q='+e.target.value,{
        method: 'GET',
        headers:{
  
        },
  
      })
      .then(res => res.json())
      .then(
        (list) => {
         this.setState({list})
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    else{
      this.setState({list: []})
    }
    
  }
  
  render () {
    return (
      <div className="search-box">
        <form action= {this.props.search} method = "GET">
          <input type ="string" onChange ={this.OnBind}   name="q" autoComplete="off"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <ResultComponent list={this.state.list} open={this.props.open} />
      </div>
      
    );
  }
}

export default InputComponent

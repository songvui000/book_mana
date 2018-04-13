import React from "react"
import PropTypes from "prop-types"
class BookComponent extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="col-md-3">
        <a href = {this.props.book.url}>
          <div className="book">
            <img alt= {this.props.book.name} src={this.props.book.name }   />
            <p>{this.props.book.name} </p>
          </div>
        </a>
      </div>
    )
  }

}
export default BookComponent
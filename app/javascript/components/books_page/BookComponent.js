import React from "react" 
import PropTypes from "prop-types" 
 
class BookComponent extends React.Component{ 
  constructor(props){ 
    super(props) 
    this.state = { name: this.props.book.name} 
  } 
  render(){ 
    return( 
      <div className="col-md-3"> 
        <span>
          <span>
          </span>
          <span>
          </span>
        </span>
        <div className="book"> 
          <a href = {'/books/'+ this.props.book.slug} > 
            <img alt= {this.props.book.name} src={this.props.book.image_url }   /> 
          </a> 
          <p onClick={() => this.props.handleDelete(this.props.book.id)}>{this.props.book.name} </p> 
        </div> 
      </div> 
    ) 
  } 
} 
 
export default BookComponent 

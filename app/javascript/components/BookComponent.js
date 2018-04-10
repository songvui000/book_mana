import React from "react"
import PropTypes from "prop-types"

class BookComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = { name: this.props.books.name}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "fj"
    });
  }
  
  render () {
    console.log(this.state)
    return (

      <div className="col-md-3">
        <a href = {this.props.books.url}>
          <div className="book" onClick={this.handleClick}>
            <img alt= {this.state.name} src={this.props.books.name }   />
            <p>{this.state.name} </p>
          </div>

        </a>
      </div>
    );
  }
}

export default BookComponent

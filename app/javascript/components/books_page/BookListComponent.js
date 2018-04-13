import React from "react"
import PropTypes from "prop-types"
import BookComponent from './BookComponent'
class BookListComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = { books: this.props.books}
  }
  render () {
    var rows = []
    this.state.books.forEach(book => {
      rows.push(<BookComponent key={book.id} book= {book} />)
    });
    return (
     <div className="container">
      <div className="books">
        <div className="row">
          {rows}
        </div>
      </div>
     </div>
    );
  }
}

export default BookListComponent

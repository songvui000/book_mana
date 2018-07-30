import React from "react"
import PropTypes from "prop-types"
import BookComponent from './BookComponent'
import _ from 'lodash'
class BookListComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = { books: this.props.books}
    this.handleDelete = this.handleDelete.bind(this)
    
  }
  handleDelete(item){
    let {books} = _.clone(this.state)
    _.pullAt(books,item -1)
    this.setState(books)
  }
  render () {
    var rows = []
    this.state.books.forEach(book=> {
      rows.push(<BookComponent key={book.id} book= {book} handleDelete={this.handleDelete.bind(this)} />)
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

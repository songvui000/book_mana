import React from "react"
import PropTypes from "prop-types"

class BookComponent extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      count: this.props.books.length
    }
  }
  
  showBook(item){
    return(
        <div className="col-md-3">
          <a href = {'/books/'+item.book.slug}>
            <div className="book">
              <img alt= {item.book.name} src={item.book.image_url }   />
              <p>{item.book.name} </p>
            </div>
          </a>
        </div>
    )
  }
  render () {
    let {books} = this.props
    
    return(
      <div className="container">
        <div className="books">
          <div className="row">
            { books.map((book,index)=> <this.showBook key={index} book={book} />)}
          </div>
        </div>
      </div>
      )
  }
}
export default BookComponent

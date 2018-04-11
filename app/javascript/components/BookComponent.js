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
        <a href = {item.book.url}>
          <div className="book">
            <img alt= {item.book.name} src={item.book.url }   />
            <p>{item.book.name} </p>
          </div>

        </a>
      </div>
    )
  }
  render () {
    let {books} = this.props
    
    return books.map((book,index)=> <this.showBook key={index} book={book} />)
  }
}
export default BookComponent

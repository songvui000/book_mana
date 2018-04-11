import React from "react"
import PropTypes from "prop-types"
import { withCookies, Cookies } from 'react-cookie'
class ResultComponent extends React.Component {
  constructor(props){
    super(props)
    this.showResult = this.showResult.bind(this);
  }
  result(item){
    return <li><a href={item.book.url}>{item.book.name}</a></li>
  }
  showResult(){
    let {list} = this.props
    if(list.books)
      return list.books.map((book,index) => <this.result key={index} book={book}/>)
  }
  render(){
    if (this.props.open)
      return(
        <div className='result-box'>
          <ul>
            {this.showResult()}
          </ul>
        </div>
      )
    else
      return (
        <div className='result-box' style={{display: 'none'}}>
        <ul>
          {this.showResult()}
        </ul>
      </div>
      )
  }
}
export default ResultComponent
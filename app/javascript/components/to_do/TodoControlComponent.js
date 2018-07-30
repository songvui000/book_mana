import React,{Component} from 'react'
import _ from 'lodash'
import PropType from 'prop-types'
class TodoControlComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    let {total, showDone } = this.props
    return(
      <div className="toDo-controlbar">
        <label>{total}</label>
        <label className="change-done" onClick={this.props.handleShowDone}>
          {showDone? "Hide Done": "Show Done"}
        </label>
      </div>
    )
  }
}
export default TodoControlComponent
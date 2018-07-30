import React,{Component} from 'react'
import _ from 'lodash'
import PropType from 'prop-types'
class TodoItemComponent extends Component{
  constructor(props){
    super(props)

  }
  handleDragEnter = (event)=>{
    // console.log(event.target)
  }
  render(){
    let {item} = this.props
    return(
      <div className={"toDo-item  " + (item.isDone? "done-item": "")} ref={drop => this.dropElement = drop} onDragStart = {(event)=>this.props.handleDrapElement(event,this.props.id)} onDragEnter={this.handleDragEnter} draggable="true">
        <div className="toDo-name">
        {item.name}
        </div>
        <div className ="toDo-event">
          <label onClick={ ()=> this.props.handleDelete(this.props.id)} ><i className="fas fa-times"></i> </label>
          <label onClick={ ()=> this.props.handleUpdate(this.props.id)}><i className="fas fa-pencil-alt"></i></label> 
          <label onClick={ ()=> this.props.handleCheckDone(this.props.id)}><i className="fas fa-check"></i></label>
        </div>
      </div>
    )
  }
}
export default TodoItemComponent
import React,{Component} from 'react'
import _ from 'lodash'
import PropType from 'prop-types'
import TodoItemComponent from './TodoItemComponent'
class TodoListComponent extends Component{
  constructor(props){
    super(props)
    
  }

  render(){
    let {list,showDone} = _.clone(this.props)
    var rows = []
     _.forEach(list,(item,index)=> {
      if( (!showDone && !item.isDone) || showDone){
          rows.push(<TodoItemComponent
                              key={index}
                              item={item}
                              id ={index} 
                              handleDrapElement = {this.props.handleDrapElement}
                              handleUpdate={this.props.handleUpdate} 
                              handleCheckDone = {this.props.handleCheckDone} 
                              handleDelete = {this.props.handleDelete}/>) 
      }
    })
    return(
      <div className="list-toDo" onDrop={this.props.handleDropElement} onDragOver={this.props.handleOnDragOver}>
        {rows}
      </div>
    ) 
    
  }
}
export default TodoListComponent
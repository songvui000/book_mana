import React,{Component} from 'react'
import _ from 'lodash'
import move from 'lodash-move'
import PropType from 'prop-types'
import TodoInputComponent from './TodoInputComponent'
import TodoListComponent from './TodoListComponent'
import TodoControlComponent from './TodoControlComponent'
class ToDoTableComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      toDo: [],
      showDone: true
    }
    
  }

  handleShowDone = ()=>{
    let {showDone} = this.state
    this.setState({
      showDone: !showDone
    })
  }

  handleNewItem = (input)=>{
    if (input.keyCode == 13){
      let {toDo} = _.clone(this.state)
      if(input.target.value.length > 0 ){
        toDo.push({name: input.target.value,isDone: false})
        this.setState( { toDo } )
      }
    }
  }

  handleUpdate = (item)=>{
    
  }

  handleCheckDone = (idx)=>{
    let {toDo} = _.clone(this.state)
    var toDoItem =   _.nth(toDo,idx)
    toDoItem.isDone = !toDoItem.isDone
    this.setState({ toDo })
  }
  
  handleDelete = (idx)=>{
    let {toDo} = _.clone(this.state)
    _.pullAt(toDo,idx)
    this.setState({toDo})
  } 

  handleDrapElement = (ev,id) =>{
    this.dragElement = id
  }
  handleOnDragOver = (ev) =>{
    ev.preventDefault()
    
  }
  handleDropElement = (ev) =>{
    ev.preventDefault()
    // var dropNode = ev.target
    // if (dropNode.className === 'toDo-name') {
    //   dropNode = dropNode.closest('.toDo-item')
    // }
    // let {toDo} = _.clone(this.state)
    // document.getElementsByClassName("list-toDo")[0].insertBefore(document.getElementsByClassName("toDo-item")[this.dragElement],dropNode)
   
  } 

  render(){
    let {showDone,toDo} = this.state
    var count = 0
    if(showDone)
      count = toDo.length
    else
      _.map(toDo,item=>{
        if (!item.isDone)
          count++
      }) 
    return(
      <div className="toDo-table">
        <TodoInputComponent handleNewItem = {this.handleNewItem} />
        <TodoListComponent  list={toDo} 
                            showDone = {showDone}
                            handleCheckDone = {this.handleCheckDone} 
                            handleDelete = {this.handleDelete} 
                            handleUpdate={this.handleUpdate}
                            handleDrapElement = {this.handleDrapElement} 
                            handleDropElement = {this.handleDropElement}
                            handleOnDragOver = {this.handleOnDragOver}
                            />
        <TodoControlComponent showDone={this.state.showDone} total={count} handleShowDone={this.handleShowDone}/>
      </div>
    )
  }
}
export default ToDoTableComponent
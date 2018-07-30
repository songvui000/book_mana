import React,{Component} from 'react'
import _ from 'lodash'
import PropType from 'prop-types'
class TodoInputComponent extends Component{
  constructor(props){
    super(props)
  }
  
  componentWillUpdate = (nextProps, nextState) => {
    this.input.value = ""
  }
  
  render(){
    return(
      <input type="text" name="to_do" ref={input=> this.input = input} onKeyDown= { this.props.handleNewItem}/>
    )
  }

  componentDidMount() {
    this.input.focus()
  }
}
export default TodoInputComponent
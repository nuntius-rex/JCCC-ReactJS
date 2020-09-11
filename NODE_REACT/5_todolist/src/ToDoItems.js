import React,{Component} from 'react';
import FlipMove from 'react-flip-move';

class ToDoItems extends Component{
    constructor(props){
      super(props);
      this.state={
        items:[]
      }
      this.createTasks=this.createTasks.bind(this);

    }

    createTasks(item){
        //return <li key={item.key}>{item.text} <span onClick={ ()=>this.delete(item.key) } className="ItemDelete" >X</span></li>

        return <li key={item.key} onClick={ ()=>this.delete(item.key) } >{item.text} <span className="ItemDelete" ><i className="far fa-trash-alt"></i> </span> </li>
    }

    delete(key){
      this.props.delete(key);
    }

    render(){
      var todoEntries=this.props.entries;
      var listItems=todoEntries.map(this.createTasks);

      return(
          <ul className="theList">
            <FlipMove duration={250} easing="ease-out">
              {listItems}
            </FlipMove>
          </ul>
      )
    }
}


export default ToDoItems;

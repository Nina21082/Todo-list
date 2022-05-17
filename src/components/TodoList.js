import { Component } from "react";
import {InputVal} from "./InputVal";
import { TodoItem } from "./TodoItem";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [
        { whatToDo: "TO DO 1", id: 1 , isDone: false, isEdit: false},

      ]
    };

    this.deleteToDo = this.deleteToDo.bind(this);
  }

  handleAddParent = (newTodo) => {
    this.setState((prevState) => {
      return {
        toDos: [
          ...prevState.toDos,
          {
            whatToDo: newTodo,
            id: prevState.toDos[prevState.toDos.length - 1].id + 1,
          },
        ],
      };
    });
  };

  deleteToDo(id) {
    this.setState((_prevState) => ({
      ..._prevState,
      toDos: _prevState.toDos.filter((el) => el.id !== id),
    }));
  }
  handleDone = (id) =>{
    this.setState((_prevState) => ({
        ..._prevState,
        toDos: _prevState.toDos.map(el => {
            if(el.id === id){
                return{
                    ...el, isDone : !el.isDone
                }
            }
            return el
        })
    }))
  }
 editChange = (ev ,id) => {
 
    this.setState((_prevState) => {
        return{..._prevState,
        toDos: _prevState.toDos.map(el =>{
            if(el.id === id){
                return{
                    ...el, whatToDo: ev.target.value
                }
            }
            return el
        })
        }
    })
 }
  handleEdit = (id) => {
     this.setState((_prevState) => ({
         ..._prevState,
         toDos: _prevState.toDos.map(el =>{
             if(el.id === id){
                 return{
                     ...el, isEdit: !el.isEdit

                 }
             }
             return el
         })
     }))
  }

  render() {
    return (
      <div>
        <InputVal handleAddParent={this.handleAddParent} />

        <ul>
          {this.state.toDos.map((el) => (
            <TodoItem
              key={el.id}
              id={el.id}
              whatToDo={el.whatToDo}
              deleteToDo={this.deleteToDo}
              done={el.isDone}
              handleDone={this.handleDone}
              edit={el.isEdit}
              editChange={this.editChange}
              handleEdit={this.handleEdit}
            />
          ))}
        </ul>
      </div>
    );
  }
}

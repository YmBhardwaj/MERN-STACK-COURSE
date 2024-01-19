import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [todos, setTodos] = useState([{
      title : "go to gym",
      description :"Go to gym at 7-9",
      complete : false
    },{
      title : "study dsa",
      description :"study at 9-11",
      complete : true
    }
  ])

  // function onClickHandler(){
  //   setCount(count +1);
  // }

  return (
    <div>
     {/* {JSON.stringify(todos)} */}
     <Todo title={todos[0].title} description={todos[0].description} ></Todo>
     {todos.map(function(todo){
      return<Todo title ={todo.title} description={todo.description}></Todo>
     })}
    </div>
  )
}
function Todo(props){
  return<div>
  <h1>{props.title}</h1>
  <h2>{props.description}</h2>
  </div>
}
export default App

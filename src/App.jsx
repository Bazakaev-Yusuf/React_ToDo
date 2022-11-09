
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from './Todo';
function App(){
   
   const [todos, setTodos] = useState([])

   const addTask = (userInput) => {
      if(userInput){
         const newElement = {
            id: Math.random().toString(36).substring(2, 9),
            task: userInput,
            complited: false,
         }
         setTodos([...todos, newElement])
      }
   }

   const removeTask = (id) => {
      setTodos([...todos.filter((todo) => todo.id !== id)])
   }

   const complitedTask = (id) => {
      setTodos([...todos.map((todo) => todo.id === id ? {...todo, complite: !todo.complite} : {...todo})
      ])
   }

   return(
      <div className="app">
         <header>
            <h1>Количество Задач: {todos.length} </h1>
         </header>
         <TodoForm addTask = {addTask}/>
         {todos.map((todo) => {
            return(
               <Todo
               key={todo.id}
               todo = {todo}
               complitedTask = {complitedTask}
               removeTask = {removeTask}
               />
            )
         })}
      </div>
   );
}
export default App
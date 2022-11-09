

function Todo({todo, complitedTask, removeTask}){
   return(
     <div key={todo.id} className = 'todo-item'>
        <div className={todo.complite ? 'item-text complited' : 'item-text'}
        onClick = {() => complitedTask(todo.id)}>
          {todo.task}
        </div>
        <div className="btn-block">
        <button onClick={() => complitedTask(todo.id)} className="btn-complited"></button>
        <button onClick={() => removeTask(todo.id)} className="btn-remove"></button>
        </div>
     </div>
   )
}
export default Todo
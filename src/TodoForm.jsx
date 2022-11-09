import {useState} from 'react'
function TodoForm({ addTask }){
   const [userInput, setUserInpust] = useState('')

   const handleChange = (e) =>{
      setUserInpust(e.currentTarget.value)
   }

   const handleSubmite = (e) =>{
      e.preventDefault()
      addTask(userInput)
      setUserInpust('')
   }

   const enter = (e) => {
      if(e.key === 'Enter'){
         handleSubmite(e)
      }
   }
   return (
      <form onSubmit={handleSubmite}>
            <button className="btn-add"></button>
            <input 
            type="text"
            placeholder="Новая задача..."
            value={userInput}
            onChange = {handleChange}
            onKeyDown = {enter}
             />
         
      </form>
   )
}
export default TodoForm
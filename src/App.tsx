import { useState } from 'react'
import Input from './components/input'
import { Todos } from './types'
import List from './components/list'
import './App.css'

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [detail, setDetail] = useState<string>('')
  const [todos, setTodos] = useState<Todos[]>([])

  const addTodo = () =>{
    if(todo) setTodos([...todos, {name: todo, detailName: detail,   id: todos.length + 1}])
    setTodo('')
    setDetail('')
  }
  const deleteTodo = (id : number)=>{
    setTodos(todos.filter((item) => item.id != id))
  }

  console.log(todos)

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
      <Input addTodo={addTodo} todo={todo} setTodo={setTodo} detail={detail} setDetail={setDetail}/>
      <List deleteTodo={deleteTodo} todos={todos}/>
    </div>
  )
}

export default App

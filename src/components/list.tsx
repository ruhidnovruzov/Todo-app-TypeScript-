import { Todos } from "../types"
import { MdOutlineDeleteSweep } from "react-icons/md";


type Props ={
    todos: Todos[],
    deleteTodo: (id: number) => void
}

const List: React.FC<Props> = ({todos, deleteTodo}) => {
  return (
    <div className="w-[90%] sm:w-[40%] rounded-[8px] mt-8 bg-[#836FFF] p-5">
      <h1 className="text-center font-bold text-2xl text-white mb-4">Todo List</h1>
      {
        todos.map((todo, i) =>(
            <div key={i}>
              <div className="text-white border-b-2">
              <h3 className="font-bold text-[25px]">{i+1}. {todo.name.toUpperCase()}</h3>
               <p>{todo.detailName}</p>
               <button  onClick={() => deleteTodo(todo.id)} className="block mt-4 text-[30px] mb-4"><MdOutlineDeleteSweep /></button>
               </div>
            </div>
        ))  
      }
    </div>
  )
}

export default List
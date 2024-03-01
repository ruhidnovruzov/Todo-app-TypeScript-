
type Props ={
     todo: string,
     setTodo: React.Dispatch<React.SetStateAction<string>>,
     addTodo: () => void
     setDetail: React.Dispatch<React.SetStateAction<string>>,
     detail: string
}

const Input: React.FC<Props> = ({todo, setTodo, addTodo, setDetail, detail}) => {


  return (
    <div className="bg-[#98ABEE] border-black border-solid w-[90%] sm:w-[40%] p-10 rounded-[8px]"> 
        <input type="text" placeholder="Title" className="block bg-transparent mb-7 w-full outline-none border-b-2 pl-2 h-12 text-white placeholder:text-white"
        onChange={(e)=>setTodo(e.target.value)} 
        value={todo}/>
        <input type="text" placeholder="Detail" className="block bg-transparent mb-7 w-full outline-none border-b-2 pl-2 h-12 text-white placeholder:text-white"
         onChange={(e)=>setDetail(e.target.value)} 
         value={detail}/>
        <button onClick={addTodo} className="w-full p-2 border-2 text-white transition-all duration-300 hover:bg-white hover:text-[#98ABEE] rounded-[8px]">Submit</button>
    </div>
  )
}

export default Input
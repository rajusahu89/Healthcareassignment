import React, { useEffect, useState } from 'react'
import { addTodo,deleteTodo,removeTodo } from '../action'
import { useDispatch,useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



export const Todo = () => {
  const[inputdata,setInputdata]=useState("")
  const [disable, setDisable] = useState(false)
  const [time, setTime] = useState(10)
  const [toaster, setToaster] = useState(false)
  

  const list=useSelector((state)=>state.todoreducer.list)
  const dispatch=useDispatch()

  
  useEffect(()=>{
    countDown()
    
  },[time])

  const countDown = () => {

     
      
      let id = setTimeout(()=>{
        setTime(time-1)

      },1000)

      if(time == 0){
           clearTimeout(id)
            toast("Time Up")
          
      }


  }

  


  setTimeout(()=>{
    setDisable(true)
  },10000)
  
  const clicked = () => {
    dispatch(addTodo(inputdata),setInputdata("") )
    setToaster(true)
    toast("Task Added")
    
  }
  
  return (
    <div>

        <div>
           
            <ToastContainer />
           
        </div>




        <h3>Countdown:{time}</h3>
         
         <input disabled={disable} onChange={(e)=>{
          setInputdata(e.target.value)
         }} type="text" value={inputdata} />

         <button disabled={disable} onClick={clicked}
         
         
         
         >Add</button>
      
       
        {list.map((ele)=>{return (
          <h3 key={ele.id}>{ele.data} <button onClick={()=>dispatch(deleteTodo(ele.id))}>delete</button></h3>
        )})}
        
          
         

    </div>
  )
}

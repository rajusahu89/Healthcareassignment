 export const addTodo=(data)=>{
    return {
        type:"Add_Todo",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTodo=(id)=>{
    return {
        type:"Delete_todo",
        id
        
    }
}
export const removeTodo=()=>{
    return {
        type:"remove_Todo"
    }
}
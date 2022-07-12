const intialdata={
    list:[]
}


const todoreducer=(state=intialdata,action)=>{
switch(action.type){
    case "Add_Todo":
        const{id,data}=action.payload;
        return {
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                   data:data
            }]
        }

        case "Delete_todo":
           const newlist= state.list.filter((ele)=>ele.id!=action.id)
            return {
                ...state,
      list:newlist
            }
        default: return state
}
}
export default todoreducer;
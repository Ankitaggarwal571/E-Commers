import { ADD_PRODUCTRED, DELETE_PRODUCTRED, GET_PRODUCTRED, UPDATE_PRODUCTRED } from "../Constants";

export function ProductRed(state=[],action){
    switch(action.type){
        case ADD_PRODUCTRED :
            state.push(action.data)
            return state
        case GET_PRODUCTRED:
            state = action.data
            return state
        case DELETE_PRODUCTRED:
            var index =  state.findIndex((item)=>item.id)
            //  var newstaet=state.filter(item=>item.id!==action.data.id) // its can we use direct rendering your componet without the help of render variable in maincatagory file
            // console.log("reducer "+index)
            state.splice(index,1)
            return state
        case UPDATE_PRODUCTRED:
            var index=state.findIndex((item)=>item.id)
            state[index].name=action.data.name
            return state
        default:
            return state
    }
}
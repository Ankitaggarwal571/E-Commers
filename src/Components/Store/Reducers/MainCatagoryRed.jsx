import { ADD_MAINCATAGORYRED, DELETE_MAINCATAGORYRED, GET_MAINCATAGORYRED, UPDATE_MAINCATAGORYRED } from "../Constants";

export function MainCatagoryRed(state=[],action){
    switch(action.type){
        case ADD_MAINCATAGORYRED :
            state.push(action.data)
            return state
        case GET_MAINCATAGORYRED:
            state = action.data
            return state
        case DELETE_MAINCATAGORYRED:
            var index =  state.findIndex((item)=>item.id)
            //  var newstaet=state.filter(item=>item.id!==action.data.id) // its can we use direct rendering your componet without the help of render variable in maincatagory file
            // console.log("reducer "+index)
            state.splice(index,1)
            return state
        case UPDATE_MAINCATAGORYRED:
            var index=state.findIndex((item)=>item.id)
            state[index].name=action.data.name
            return state
        default:
            return state
    }
}
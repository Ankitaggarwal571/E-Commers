import { ADD_SUBCATAGORYRED, DELETE_SUBCATAGORYRED, GET_SUBCATAGORYRED, UPDATE_SUBCATAGORYRED } from "../Constants";


export function SubCatagoryRed(state=[],action){
    switch(action.type){
        case ADD_SUBCATAGORYRED:
            state.push(action.data)
            return state
        case GET_SUBCATAGORYRED:
            // console.log(action.data +"reducer")
            state=action.data
            return state
        case DELETE_SUBCATAGORYRED:
            var index=state.findIndex((state)=>state.id)
            state=state.splice(index,1)
            return state
        case UPDATE_SUBCATAGORYRED:
            var index=state.findIndex((state)=>state.id)
            state[index].name=action.data.name
            return state
        default:
            return state
    }
}
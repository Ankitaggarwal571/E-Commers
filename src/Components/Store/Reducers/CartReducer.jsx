import { ADD_CARTRED, DELETE_CARTRED, GET_CARTRED, UPDATE_CARTRED } from "../Constants"


export function CartReducer(state=[],action){
    switch(action.type){
        case ADD_CARTRED:
            state.push(action.data)
            return state
        case GET_CARTRED:
           state=action.data
            return state
        case UPDATE_CARTRED:
            var index=state.findIndex(item=>item.id!==action.data.id)
            state[index].name=action.data.name
            return state
        case DELETE_CARTRED:
            let item=state.findIndex((item=>item.id))
            state=state.splice(item,1)
            return state
        default:
        return state
    }
}
import {ADD_USERRED, DELETE_USERRED, GET_USERRED, UPDATE_USERRED } from "../Constants"


export function UserReducer(state=[],action){
    switch(action.type){
        case ADD_USERRED:
            state=state.push(action.data)
            return state
        case GET_USERRED:
            state=action.data
            return state
        case UPDATE_USERRED:
            var index=state.findIndex((item)=>item.id===Number(action.data.id))
            state=state[index].name=action.data.name
            return state
        case DELETE_USERRED:
            let item=state.findIndex((item=>item.id))
            state=state.splice(item,1)
            return state
        default:
        return state
    }
}
import { ADD_BRANDS, DELETE_BRANDSRED, GET_BRANDSRED, UPDATE_BRANDSRED } from "../Constants";

export function BrandsReducer(state=[],action){
    switch(action.type){
        case ADD_BRANDS:
            state=state.push(action.data)
            return state
        case GET_BRANDSRED:
            state=action.data
            return state
        case UPDATE_BRANDSRED:
            var index=state.findIndex((item)=>item.id===Number(action.data.id))
            state=state[index].name=action.data.name
            return state
        case DELETE_BRANDSRED:
            let item=state.findIndex((item=>item.id))
            state=state.splice(item,1)
            return state
        default:
        return state
    }
}
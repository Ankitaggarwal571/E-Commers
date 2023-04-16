import { ADD_WISHLISTRED, DELETE_WISHLISTRED, GET_WISHLISTRED, UPDATE_WISHLISTRED } from "../Constants"


export function WishlistReducer(state=[],action){
    switch(action.type){
        case ADD_WISHLISTRED:
            state=state.push(action.data)
            return state
        case GET_WISHLISTRED:
            state=action.data
            return state
        case UPDATE_WISHLISTRED:
            var index=state.findIndex((item)=>item.id===Number(action.data.id))
            state=state[index].name=action.data.name
            return state
        case DELETE_WISHLISTRED:
            let item=state.findIndex((item=>item.id))
            state=state.splice(item,1)
            return state
        default:
        return state
    }
}
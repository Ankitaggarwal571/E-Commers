import { ADD_WISHLIST, DELETE_WISHLIST, GET_WISHLIST, UPDATE_WISHLIST } from "../Constants"


export function AddWishlistAction(data){
  // console.log(`Action data ${JSON.stringify(data)}`)
  return{
    type:ADD_WISHLIST,
    payload:data
  }
  
}

export function GetWishlistAction(){
    return{
      type:GET_WISHLIST,
    }
  }

  export function updateWishlistAction(data){
    return{
      type:UPDATE_WISHLIST,
      payload:data
    }
  }

  export function DeleteWishlistAction(data){
    return{
      type:DELETE_WISHLIST,
      payload:data
    }
  }
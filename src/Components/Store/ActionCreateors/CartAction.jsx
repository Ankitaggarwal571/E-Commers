import { ADD_CART, DELETE_CART, GET_CART, UPDATE_CART } from "../Constants"


export function AddCartAction(data){
  // console.log(`Action data ${JSON.stringify(data)}`)
  return{
    type:ADD_CART,
    payload:data
  }
  
}

export function getCartAction(){
    return{
      type:GET_CART,
    }
  }

  export function updateCartAction(data){
    // console.log(data )
    return{
      type:UPDATE_CART,
      payload:data
    }
  }

  export function DeleteCartAction(data){
    return{
      type:DELETE_CART,
      payload:data
    }
  }
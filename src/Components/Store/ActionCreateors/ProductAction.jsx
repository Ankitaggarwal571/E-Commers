import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT } from "../Constants"



export function addProdctAction(data){
    return{
      type:ADD_PRODUCT,
      payload:data
    }
    
  }
  
  export function getProductAction(){
      return{
        type:GET_PRODUCT,
      }
    }
  
    export function updateProductAction(data){
      // console.log("Action "+data)
      return{
        type:UPDATE_PRODUCT,
        payload:data
      }
    }
  
    export function DeleteProductAction(data){
      return{
        type:DELETE_PRODUCT,
        payload:data
      }
    }
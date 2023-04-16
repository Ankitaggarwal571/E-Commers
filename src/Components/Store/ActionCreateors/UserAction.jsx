import {ADD_USER, DELETE_USER, GET_USER, UPDATE_USER } from "../Constants";


export function AddUserAction(data){
  // console.log(`Action data ${JSON.stringify(data)}`)
  return{
    type:ADD_USER,
    payload:data
  }
  
}

export function GetUserAction(){
    return{
      type:GET_USER,
    }
  }

  export function updateUserAction(data){
    return{
      type:UPDATE_USER,
      payload:data
    }
  }

  export function DeleteUserAction(data){
    return{
      type:DELETE_USER,
      payload:data
    }
  }
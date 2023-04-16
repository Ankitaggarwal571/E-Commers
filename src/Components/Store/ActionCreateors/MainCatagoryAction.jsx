import { ADD_MAINCATAGORY, DELETE_MAINCATAGORY, GET_MAINCATAGORY, UPDATE_MAINCATAGORY } from "../Constants";


export function addMainCatagory(data){
  // console.log(`Action data ${JSON.stringify(data)}`)
  return{
    type:ADD_MAINCATAGORY,
    payload:data
  }
  
}

export function getMainCatagory(){
    return{
      type:GET_MAINCATAGORY,
    }
  }

  export function updateMainCatagory(data){
    return{
      type:UPDATE_MAINCATAGORY,
      payload:data
    }
  }

  export function DeleteMainCatagory(data){
    return{
      type:DELETE_MAINCATAGORY,
      payload:data
    }
  }
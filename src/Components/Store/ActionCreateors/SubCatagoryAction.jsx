import { ADD_SUBCATAGORY, DELETE_SUBCATAGORY, GET_SUBCATAGORY, UPDATE_SUBCATAGORY } from "../Constants";

export function addSubCatagoryAction(data){
    console.log("Sub ADD Action "+data)
    return{
        type:ADD_SUBCATAGORY,
        payload:data
    }
}
export function getSubCatagoryAction(){
    return{
        type:GET_SUBCATAGORY,
    }
}
export function updateSubCatagoryAction(data){
    console.log("action "+data)
    return{
         type:UPDATE_SUBCATAGORY,
         payload:data
    }
}
export function deleteSubCatagoryAction(data){
    return{
        type:DELETE_SUBCATAGORY,
        payload:data
    }
}
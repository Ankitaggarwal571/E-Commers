import { ADD_BRANDS, DELETE_BRANDS, GET_BRANDS, UPDATE_BRANDS } from "../Constants";


export function addBrandsAction(data){
    console.log("Action ADD Brands "+JSON.stringify(data))
    return {
        type:ADD_BRANDS,
        payload:data
    }
}

export function getBrandsAction(){
    return {
        type:GET_BRANDS
    }
}

export function updateBrandsAction(data){
    return {
        type:UPDATE_BRANDS,
        payload:data
    }
}

export function deleteBrandsAction(data){
    return {
        type:DELETE_BRANDS,
        payload:data
    }
}
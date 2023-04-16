import { takeEvery } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import { ADD_SUBCATAGORY, ADD_SUBCATAGORYRED, DELETE_SUBCATAGORY, DELETE_SUBCATAGORYRED, GET_SUBCATAGORY, GET_SUBCATAGORYRED, UPDATE_SUBCATAGORY, UPDATE_SUBCATAGORYRED } from "../Constants";
import { createSubcategoryAPI, DeleteSubCatagoryApi, getSubcategoryAPI, UpdateSubCatagoryApi } from "../Services";

function* addSubCatagory(action){
    // console.log("saga "+action.payload)
    var res = yield createSubcategoryAPI(action.payload)
    yield put({type:ADD_SUBCATAGORYRED,data:res})
}
function* getSubCatagorysgag(){
    var res = yield getSubcategoryAPI()
    // console.log("SAGA" + JSON.stringify(res))
    yield put({type:GET_SUBCATAGORYRED,data:res})
}

function* deleteSubCatagory(action){
    var res = yield DeleteSubCatagoryApi(action.payload)
    yield put({type:DELETE_SUBCATAGORYRED,data:res})
}
function* updataSubCatagory(action){
   yield UpdateSubCatagoryApi(action.payload)
    // console.log("Saga "+JSON.stringify(action.payload))
    yield put({type:UPDATE_SUBCATAGORYRED,data:action.payload})
}

export function* SubCatagorySaga(){ // watcher
     yield takeEvery(ADD_SUBCATAGORY,addSubCatagory)
     yield takeEvery(GET_SUBCATAGORY,getSubCatagorysgag)
     yield takeEvery(DELETE_SUBCATAGORY,deleteSubCatagory)
     yield takeEvery(UPDATE_SUBCATAGORY,updataSubCatagory)
}
import { put, takeEvery } from "redux-saga/effects";

import {  ADD_MAINCATAGORY,  ADD_MAINCATAGORYRED,  DELETE_MAINCATAGORY,  DELETE_MAINCATAGORYRED,  GET_MAINCATAGORY, GET_MAINCATAGORYRED, UPDATE_MAINCATAGORY, UPDATE_MAINCATAGORYRED } from "../Constants"
import { createMaincategoryAPI, getMaincategoryAPI , DeleteMainCatagoryApi, UpdateMainCatagoryApi } from "../Services"

function* createMaincategorySaga(action) {   //executer
//   console.log(`Saga data ${action}`)
    var response = yield createMaincategoryAPI(action.payload)
    yield put({type:ADD_MAINCATAGORYRED, data: response })
   
}
function* getMaincategorySaga() {   //executer
    var response = yield getMaincategoryAPI()
    yield put({ type: GET_MAINCATAGORYRED, data: response })
}

function* deleteMainCatagory(action){
   yield DeleteMainCatagoryApi(action.payload)
    yield put({type:DELETE_MAINCATAGORYRED,data:action.payload})
}

function* updateMainCatagory(action){
    yield UpdateMainCatagoryApi(action.payload)
    yield put({type:UPDATE_MAINCATAGORYRED,data:action.payload})
}

export function* maincategorySaga() {    //watcher
    yield takeEvery(ADD_MAINCATAGORY, createMaincategorySaga)
    yield takeEvery(GET_MAINCATAGORY, getMaincategorySaga)
    yield takeEvery(DELETE_MAINCATAGORY, deleteMainCatagory)
    yield takeEvery(UPDATE_MAINCATAGORY,updateMainCatagory)
    // yield takeEvery(DELETE_MAINCATEGORY, deleteMaincategorySaga)
}
import { put, takeEvery } from "redux-saga/effects";

import { ADD_BRANDS, ADD_BRANDSRED, DELETE_BRANDS, DELETE_BRANDSRED, GET_BRANDS, GET_BRANDSRED, UPDATE_BRANDS, UPDATE_BRANDSRED } from "../Constants";
import { addBrandsApi, deleteBrandsApi, getBrandsApi, updateBrandsApi } from "../Services";

function* addbrandSaga(action){
    // console.log("saga "+JSON.stringify(action))
 var res = yield addBrandsApi(action.payload)
 yield put({type:ADD_BRANDSRED,data:res})
}

function* getBrandsSaga(){
    var res = yield getBrandsApi()
    yield put({type:GET_BRANDSRED,data:res})
}
function* updateBrandsSaga(action){
   yield updateBrandsApi(action.payload)
   yield put({type:UPDATE_BRANDSRED,data:action.payload})
}
function* deleteBrandsSaga(action){
    yield deleteBrandsApi(action.payload)
    yield put({type:DELETE_BRANDSRED,data:action.payload})
}


export function* BrandSaga(){
   yield takeEvery(ADD_BRANDS,addbrandSaga)
   yield takeEvery(GET_BRANDS,getBrandsSaga)
   yield takeEvery(UPDATE_BRANDS,updateBrandsSaga)
   yield takeEvery(DELETE_BRANDS,deleteBrandsSaga)
}
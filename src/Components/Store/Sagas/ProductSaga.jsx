import { put, takeEvery } from "redux-saga/effects"
import {ADD_PRODUCT, ADD_PRODUCTRED, DELETE_PRODUCT, DELETE_PRODUCTRED, GET_PRODUCT, GET_PRODUCTRED, UPDATE_PRODUCT, UPDATE_PRODUCTRED } from "../Constants"
import { addProductApi, deleteProductApi, getProductApi, updateProductApi } from "../Services"


function* createProductSaga(action) {   //executer
    //   console.log(`Saga data ${action}`)
        var response = yield addProductApi(action.payload)
        yield put({type:ADD_PRODUCTRED, data: response })
       
    }
    function* getProductSaga() {   //executer
        var response = yield getProductApi()
        yield put({ type: GET_PRODUCTRED, data: response })
    }
    
    function* deleteProductSaga(action){
       yield deleteProductApi(action.payload)
        yield put({type:DELETE_PRODUCTRED,data:action.payload})
    }
    
    function* updateProductSaga(action){
        yield updateProductApi(action.payload)
        yield put({type:UPDATE_PRODUCTRED,data:action.payload})
    }
    
    export function* ProductSaga() {    //watcher
        yield takeEvery(ADD_PRODUCT, createProductSaga)
        yield takeEvery(GET_PRODUCT, getProductSaga)
        yield takeEvery(DELETE_PRODUCT, deleteProductSaga)
        yield takeEvery(UPDATE_PRODUCT,updateProductSaga)
        // yield takeEvery(DELETE_MAINCATEGORY, deleteMaincategorySaga)
    }
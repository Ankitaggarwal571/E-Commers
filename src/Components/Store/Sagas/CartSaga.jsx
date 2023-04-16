import { put, takeEvery } from "redux-saga/effects";
import { addCartApi, deleteCartApi, getCartrApi, updateCartApi } from "../Services";
import { ADD_CART, ADD_CARTRED, DELETE_CART, DELETE_CARTRED, GET_CART, GET_CARTRED, UPDATE_CART, UPDATE_CARTRED } from "../Constants";


function* addCartSaga(action){
    // console.log("saga "+JSON.stringify(action))
 var res = yield addCartApi(action.payload)
 yield put({type:ADD_CARTRED,data:res})
}

function* getCartSaga(){
    var res = yield getCartrApi()
    yield put({type:GET_CARTRED,data:res})
}
function* updateCartSaga(action){
   yield updateCartApi(action.payload)
   yield put({type:UPDATE_CARTRED,data:action.payload})
}
function* deleteCartSaga(action){
    yield deleteCartApi(action.payload)
    yield put({type:DELETE_CARTRED,data:action.payload})
}


export function* CartSaga(){
   yield takeEvery(ADD_CART,addCartSaga)
   yield takeEvery(GET_CART,getCartSaga)
   yield takeEvery(UPDATE_CART,updateCartSaga)
   yield takeEvery(DELETE_CART,deleteCartSaga)
}
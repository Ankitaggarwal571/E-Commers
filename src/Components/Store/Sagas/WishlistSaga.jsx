import { put, takeEvery } from "redux-saga/effects";
import { addWishlistApi, deleteWishlistApi, getWishlistApi, updateWishlistApi } from "../Services";
import { ADD_WISHLIST, ADD_WISHLISTRED, DELETE_WISHLIST, DELETE_WISHLISTRED, GET_WISHLIST, GET_WISHLISTRED, UPDATE_WISHLIST, UPDATE_WISHLISTRED } from "../Constants";


function* addWishlistSaga(action){
    // console.log("saga "+JSON.stringify(action))
 var res = yield addWishlistApi(action.payload)
 yield put({type:ADD_WISHLISTRED,data:res})
}

function* getWishlistSaga(){
    var res = yield getWishlistApi()
    yield put({type:GET_WISHLISTRED,data:res})
}
function* updateWishlistSaga(action){
   yield updateWishlistApi(action.payload)
   yield put({type:UPDATE_WISHLISTRED,data:action.payload})
}
function* deleteWishlistSaga(action){
    yield deleteWishlistApi(action.payload)
    yield put({type:DELETE_WISHLISTRED,data:action.payload})
}


export function* CartSaga(){
   yield takeEvery(ADD_WISHLIST,addWishlistSaga)
   yield takeEvery(GET_WISHLIST,getWishlistSaga)
   yield takeEvery(UPDATE_WISHLIST,updateWishlistSaga)
   yield takeEvery(DELETE_WISHLIST,deleteWishlistSaga)
}
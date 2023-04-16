import { put, takeEvery } from "redux-saga/effects";
import { addUserApi, deleteUserApi, getUserApi, updateUserApi } from "../Services";
import { ADD_USER, ADD_USERRED, DELETE_USER, DELETE_USERRED, GET_USER, GET_USERRED, UPDATE_USER, UPDATE_USERRED } from "../Constants";


function* addUserSaga(action){
    // console.log("saga "+JSON.stringify(action))
 var res = yield addUserApi(action.payload)
 yield put({type:ADD_USERRED,data:res})
}

function* getUserSaga(){
    var res = yield getUserApi()
    yield put({type:GET_USERRED,data:res})
}
function* updateUserSaga(action){
   yield updateUserApi(action.payload)
   yield put({type:UPDATE_USERRED,data:action.payload})
}
function* deleteUserSaga(action){
    yield deleteUserApi(action.payload)
    yield put({type:DELETE_USERRED,data:action.payload})
}


export function* UserSaga(){
   yield takeEvery(ADD_USER,addUserSaga)
   yield takeEvery(GET_USER,getUserSaga)
   yield takeEvery(UPDATE_USER,updateUserSaga)
   yield takeEvery(DELETE_USER,deleteUserSaga)
}
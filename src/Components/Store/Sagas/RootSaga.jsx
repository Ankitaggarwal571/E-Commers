import { all } from "redux-saga/effects";
import {maincategorySaga } from "./AddMainCatagorySaga";
import { BrandSaga } from "./BrandsSaga";
import { ProductSaga } from "./ProductSaga";
import { SubCatagorySaga } from "./SubCatagorySaga";
import { UserSaga } from "./UserSaga";
import { CartSaga } from "./CartSaga";




export default function* RootSaga(){
    yield all([maincategorySaga(),SubCatagorySaga(),BrandSaga(),ProductSaga(),UserSaga(),CartSaga()])
}
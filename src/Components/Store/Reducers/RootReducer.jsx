import { combineReducers } from "redux";
import { BrandsReducer } from "./BrandsReducer";
import { MainCatagoryRed } from "./MainCatagoryRed";
import { ProductRed } from "./ProductReducer";
import { SubCatagoryRed } from "./SubCatagoryRed";
import { UserReducer } from "./UserReducer";
import { CartReducer } from "./CartReducer";
import { WishlistReducer } from "./WishlistReducer";


export default  combineReducers({
        MainCatagoryState:MainCatagoryRed,
        SubCatagoryState:SubCatagoryRed,   
        BrandsState:BrandsReducer,
        ProductState:ProductRed,
        UserState:UserReducer,
        CartState:CartReducer,
        WishlistState:WishlistReducer
})
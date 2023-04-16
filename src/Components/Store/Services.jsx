// MainCategory
export async function createMaincategoryAPI(data) {
    // console.log(data)
    var respone = await fetch("http://localhost:7000/maincatagory", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    // console.log(respone)
    return await respone.json()

}
export async function getMaincategoryAPI() {
    var respone = await fetch("http://localhost:7000/maincatagory", {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respone.json()
}

export async function UpdateMainCatagoryApi(data) {
    var respone = await fetch("http://localhost:7000/maincatagory/" + data.id, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respone.json()
}

export async function DeleteMainCatagoryApi(data) {
    var respone = await fetch("http://localhost:7000/maincatagory/" + data.id, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respone.json()
}

// SubCategory
export async function createSubcategoryAPI(data) {
    var respone = await fetch("http://localhost:7000/subcatagory", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respone.json()

}
export async function getSubcategoryAPI() {
    var respone = await fetch("http://localhost:7000/subcatagory", {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    return await respone.json()
}

export async function UpdateSubCatagoryApi(data) {
    var respone = await fetch("http://localhost:7000/subcatagory/" + data.id, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respone.json()
}

export async function DeleteSubCatagoryApi(data) {
    var respone = await fetch("http://localhost:7000/subcatagory/" + data.id, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await respone.json()
}

// BRANDS API

export async function addBrandsApi(data) {
    var response = await fetch("http://localhost:7000/brand", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
    
}

export async function getBrandsApi() {
    var response = await fetch("http://localhost:7000/brand",{
        method:"GET",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateBrandsApi(data){
    var res = await fetch("http://localhost:7000/brand/"+data.id,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}
export async function deleteBrandsApi(data){
    var res = await fetch("http://localhost:7000/brand/"+data.id,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}

// PRODUCT API

export async function addProductApi(data) {
    var response = await fetch("http://localhost:7000/product", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
    
}

export async function getProductApi() {
    var response = await fetch("http://localhost:7000/product",{
        method:"GET",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateProductApi(data){
    var res = await fetch("http://localhost:7000/product/"+data.id,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json() 
}
export async function deleteProductApi(data){
    var res = await fetch("http://localhost:7000/product/"+data.id,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}

// User API

export async function addUserApi(data) {
    var response = await fetch("http://localhost:7000/user", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
    
}

export async function getUserApi() {
    var response = await fetch("http://localhost:7000/user",{
        method:"GET",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateUserApi(data){
    var res = await fetch("http://localhost:7000/user/"+data.id,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json() 
}
export async function deleteUserApi(data){
    var res = await fetch("http://localhost:7000/user/"+data.id,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}

// Cart API

export async function addCartApi(data) {
    var response = await fetch("http://localhost:7000/cart", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
    
}

export async function getCartrApi() {
    var response = await fetch("http://localhost:7000/cart",{
        method:"GET",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateCartApi(data){
    // console.log("services" +JSON.stringify(data))
    var res = await fetch("http://localhost:7000/cart/"+data.id,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json() 
}
export async function deleteCartApi(data){
    var res = await fetch("http://localhost:7000/cart/"+data.id,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}

// Wishlist API

export async function addWishlistApi(data) {
    var response = await fetch("http://localhost:7000/whislist", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
    
}

export async function getWishlistApi() {
    var response = await fetch("http://localhost:7000/whislist",{
        method:"GET",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateWishlistApi(data){
    var res = await fetch("http://localhost:7000/whislist/"+data.id,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json() 
}
export async function deleteWishlistApi(data){
    var res = await fetch("http://localhost:7000/whislist/"+data.id,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await res.json()
}
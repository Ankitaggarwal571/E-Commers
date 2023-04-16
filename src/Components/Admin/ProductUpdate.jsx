import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getBrandsAction } from '../Store/ActionCreateors/BrandsAction'
import { getMainCatagory } from '../Store/ActionCreateors/MainCatagoryAction'
import {  getProductAction, updateProductAction } from '../Store/ActionCreateors/ProductAction'
import { getSubCatagoryAction } from '../Store/ActionCreateors/SubCatagoryAction'
// import {getMainCatagory, updateMainCatagory } from '../Store/ActionCreateors/MainCatagoryAction'
import LeftNav from './LeftNav'


export default function ProductUpdate() {
  var productData=useSelector((state)=>state.ProductState)
  var MainCatagoryData=useSelector((state)=>state.MainCatagoryState)
  var SubCatagoryData=useSelector((state)=>state.SubCatagoryState)
  var BrandsData=useSelector((state)=>state.BrandsState)
  var dispatch=useDispatch()
  var navigate=useNavigate()
  var {id}=useParams()
 const[data,setdata]=useState({
  name:"",
  mainCatagory:"",
  subCatagoty:"",
  brands:"",
  color:"",
  size:"",
  baseprice:"",
  discount:"",
  finalprice:"",
  stock:"In Stock",
  discription:"This is Sample Discription",
  pic1:"",
  pic2:"",
  pic3:"",
  pic4:""
 })
 function getData(e){
     var name=e.target.name
     var value=e.target.value
    //  console.log("get data "+value)
    //  console.log("get data "+name)
     setdata((old)=>{
      return{
          ...old,
          [name]:value 

      }
     })
 }
 function getFile(e) {
  var name = e.target.name
  var value = e.target.files[0].name
  // console.log("files "+JSON.stringify( e.target.files))
  setdata((old) => {
      return {
          ...old,
          [name]: value
      }
  })
}
 function postData(e){
  e.preventDefault()
  var bp=Number(data.baseprice)
  var dis=Number(data.discount)
  var final=parseInt(bp-bp*dis/100)
  var mc = data.mainCatagory
  var sc = data.subCatagoty
  var br = data.brands
  if(mc==="")
  mc=MainCatagoryData[0].name
  if(sc==="")
  sc=SubCatagoryData[0].name
  if(br==="")
  br=BrandsData[0].name
  var item={
          id:id,
          name:data.name,
          maincategory:mc,
          subcategory:sc,
          brand:br,
          color:data.color,
          size:data.size,
          baseprice:data.baseprice,
          discount:data.discount,
          finalprice:final,
          stock:data.stock,
          description:data.discription,
          pic1:data.pic1,
          pic2:data.pic2,
          pic3:data.pic3,
          pic4:data.pic4
  }
  
  dispatch(updateProductAction(item))
  navigate('/adminProduct')

 }
 useEffect(()=>{
  dispatch(getProductAction())
  dispatch(getMainCatagory())
  dispatch(getSubCatagoryAction())
  dispatch(getBrandsAction())
  var item=productData.find((item)=>item.id===Number(id))
  if(item)
  setdata(item)
  console.log(item.maincategory + " Main")
 },[])
  return (                          
    <>
      <div className="hero-wrap hero-bread" style={{backgroundImage:"url('/assets/images/bg_6.jpg')"}} >
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animated text-center">
          	<p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>Admin</span></p>
            <h1 className="mb-0 bread">Product Home </h1>
          </div>
        </div> 
      </div>
    </div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2 col-12 ">
                <LeftNav/>
            </div>
       
            <div className="col-lg-10 my-4">
                <h4 className='bg-primary text-center text-light'>Update Product</h4>
                <form className='p-2' onSubmit={postData}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder='Enter Catagoroy Name' className='form-control' onChange={getData} value={data.name} />
                    <div className="row mb-2 mt-2">
                        <div className="col-lg-3 ">
                            <label htmlFor="mainCatagory">MainCatagory</label>
                            <select name="mainCatagory" id="mainCatagory" className='form-control' onChange={getData} >
                                {
                                    MainCatagoryData.map((item ,index)=>{
                                        return <option key={index} value={item.name}  selected={item.name===data.mainCatagory} >{item.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-lg-3">
                            <label htmlFor="subCatagoty">SubCatagory</label>
                            <select name="subCatagoty" id="subCatagoty" className='form-control' onChange={getData} >
                                {
                                    SubCatagoryData.map((item ,index)=>{
                                        // console.log(item.name + " Sub")
                                        return <option key={index} value={item.name} defaultValue={item.name===data.subCatagoty}>{item.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-lg-3">
                            <label htmlFor="brands">Brands</label>
                            <select name="brands" id="brands" className='form-control' onChange={getData} >
                                {
                                    BrandsData.map((item ,index)=>{
                                        return <option key={index} value={item.name}>{item.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-lg-3">
                            <label htmlFor="stock">Stockes</label>
                            <select name="stock" id="stock" className='form-control' onChange={getData} >
                               <option value="in-stock" selected={"in-stock"===data.stock}>In-Stock</option>
                               <option value="out-Stock" selected={'out-stock'===data.stock}>Out Of Stock</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-6 ">
                            <label htmlFor="color">Color</label>
                            <input type="text" placeholder='Enter Color' name='color' className='form-control' onChange={getData} value={data.color} />
                        </div>
                        <div className="col-6 ">
                            <label htmlFor="size">Size</label>
                            <input type="text" placeholder='Enter Size' name='size' className='form-control' onChange={getData} value={data.size} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-6 ">
                            <label htmlFor="baseprice">Base Price</label>
                            <input type="number" placeholder='Enter Base Price' name='baseprice' className='form-control' onChange={getData} value={data.baseprice} />
                        </div>
                        <div className="col-6 ">
                            <label htmlFor="discount">Discount</label>
                            <input type="number" placeholder='Enter Discount' name='discount' className='form-control' onChange={getData} value={data.discount} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="discription">Discription</label>
                            <textarea name="discription" id="discription" value={data.discription} rows="3" onChange={getData} className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                            <label htmlFor="pic1">Pic 1</label>
                            <input type="file" name="pic1" id="pic1" onChange={getFile} className='form-control'/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="pic2">Pic 2</label>
                            <input type="file" name="pic2" id="pic2" onChange={getFile} className='form-control'/>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                            <label htmlFor="pic3">Pic 3</label>
                            <input type="file" name="pic3" id="pic3" onChange={getFile} className='form-control'/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="pic4">Pic 4</label>
                            <input type="file" name="pic4" id="pic4" onChange={getFile} className="form-control" />

                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary w-100 my-3'> Update Product </button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}
